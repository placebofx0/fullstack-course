import express from 'express';
import cors from 'cors';
import useProfileHandlers from '#app/servers/http/handlers/profile';
import useAuthHandlers from '#app/servers/http/handlers/auth';
import usePortfolioHandlers from '#app/servers/http/handlers/portfolio';
import { errorHandler } from '#app/servers/http/middlewares/errors';

export default ({ profileService, authService, portfolioService }, config) => {
    const app = express();
    const profile = useProfileHandlers({ profileService }, config.http);
    const auth = useAuthHandlers({ authService }, config.http);
    const portfolio = usePortfolioHandlers({ portfolioService }, config.http);

    app.use(express.json());
    app.use(cors(config.http.cors));
    app.use('/v1/profile', profile.router());
    app.use('/v1/auth', auth.router());
    app.use('/v1/portfolios', portfolio.router());
    app.use(errorHandler);

    function run() {
        app.listen(config.http.port, () => {
            console.log(`The server is running on port ${config.http.port}`);
        });
    }

    return {
        run,
    };
};
