// Libs
import { DataSource } from "apollo-datasource";
import { EntityManager, Repository } from "typeorm";
import * as DataLoader from "dataloader";

// Models
import { User } from "../models/User";

/**
 * User data source access class.
 */
export class UserDataSource extends DataSource {
    private manager: EntityManager;

    private repository: Repository<User>;
    
    private dataLoader: DataLoader<string, User>;

    constructor(manager: EntityManager) {
        super();

        this.manager = manager;
        this.repository = manager.getRepository(User);
        this.dataLoader = new DataLoader(async (userIds: string[]) => {
            const users = await this.repository.findByIds(userIds);

            return userIds.map((id) => users.find((user) => user.id === id) ?? null);
        });
    }

    /**
     * Load all users.
     */
    loadUsers() {
        return this.repository.find();
    }

    /**
     * Load one user by identifier.
     * @param id User's own identifier.
     */
    loadUserById(id: string) {
        return this.dataLoader.load(id);
    }

    /**
     * Save a User.
     * @param user User.
     */
    saveUser(user: User) {
        return this.repository.save(user);
    }
}
