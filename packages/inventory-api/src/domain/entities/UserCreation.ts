/**
 * Represent a user to be created
 */
export interface UserCreation {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
}

export interface UserCreated extends UserCreation {
    id: string;
}
