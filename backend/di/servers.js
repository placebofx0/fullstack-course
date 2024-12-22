import useHttpServer from '#app/servers/http/index'

export default ({ profileService, authService, portfolioService }, config) => {
    const httpServer = useHttpServer({ profileService, authService, portfolioService }, config);

    function run() {
        httpServer.run();
    }

    return {
        run,
    }
}