import connect from '#app/repositories/mongo/connection';
import useProfileRepo from '#app/repositories/mongo/profile';
import useUserRepo from '#app/repositories/mongo/user';
import usePortfolioRepo from '#app/repositories/mongo/portfolio';

export default ({ db }) => {
    const connection = connect(db.mongo.uri);

    const profileRepo = useProfileRepo(connection);
    const userRepo = useUserRepo(connection);
    const portfolioRepo = usePortfolioRepo(connection);

    return {
        profileRepo,
        userRepo,
        portfolioRepo,
    }
}
