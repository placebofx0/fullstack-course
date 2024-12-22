import useProfileService from '#app/services/profile';
import useAuthService from '#app/services/auth';
import usePortfolioService from '#app/services/portfolio';

export default ({ profileRepo, userRepo, portfolioRepo }, config) => {
    const profileService = useProfileService({ profileRepo });
    const authService = useAuthService({ userRepo }, config.jwt);
    const portfolioService = usePortfolioService({ portfolioRepo });

    return {
        profileService,
        authService,
        portfolioService,
    }
}
