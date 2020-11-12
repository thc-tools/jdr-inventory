#!/bin/sh
set -e

USER_ID=${USER_ID:-1000}
USERNAME=${USERNAME:-'node'}
GROUP_ID=${GROUP_ID:-1000}
GROUPNAME=${GROUPNAME:-'node'}
HOMEDIR=${HOMEDIR:-"/home/$USERNAME"}

# check group existence
getent group $GROUP_ID > /dev/null 2>&1 && true
if [ ! $? -eq 0 ]; then
    # if not exist, create it
    groupadd -f -g $GROUP_ID $GROUPNAME
else
    # else get existing groupname
    GROUPNAME=$(getent group $GROUP_ID | cut -d : -f 1 )
fi
# check user existence
getent passwd $USER_ID > /dev/null 2>&1 && true
if [ ! $? -eq 0 ]; then
    # if not exist, create it
    useradd -u $USER_ID -g $GROUP_ID -m -d $HOMEDIR $USERNAME
else
    # else get existing username and homedir
    USERNAME=$(getent passwd $USER_ID | cut -d : -f 1 )
    HOMEDIR=$(getent passwd $USER_ID | cut -d : -f 6 )
fi

# make sure ownership is ok
chown -R $USERNAME:$GROUPNAME /inventory/inventory-app

su-exec $USERNAME "$@"
