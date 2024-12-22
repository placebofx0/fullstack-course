import 'dotenv/config';
import useRepos from '#app/di/repositories';
import useServices from '#app/di/services';
import useServers from '#app/di/servers';

const { profileRepo, userRepo, portfolioRepo } = useRepos({
    db: {
        mongo: {
            uri: process.env.MONGO_URI,
        }
    }
});

const { profileService, authService, portfolioService } = useServices({
    profileRepo,
    userRepo,
    portfolioRepo,
}, {
    jwt: {
        secret: process.env.JWT_SECRET,
        algorithms: process.env.JWT_ALGORITHMS.split(','),
    },
});

const servers = useServers({
    profileService,
    authService,
    portfolioService,
}, {
    http: {
        port: process.env.APP_PORT,
        jwt: {
            secret: process.env.JWT_SECRET,
            algorithms: process.env.JWT_ALGORITHMS.split(','),
        },
        cors: {
            origin: process.env.CORS_ORIGIN,
        },
    },
});

servers.run();