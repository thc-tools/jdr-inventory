import { getConnection } from "../../infrastructure/db";
import { Campaign } from "../../models";

export const queryResolvers = {
    users: (_parent, _args, _context) => [],
    campaigns() {
        const campaign = new Campaign();
        
        campaign.name = "haha";

        return getConnection().manager.save(campaign);
    },
};
