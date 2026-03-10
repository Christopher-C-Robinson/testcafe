import { getFreePort } from '../../../../../utils/endpoint-utils';
import createTempProfile from './create-temp-profile';


export default async function (config, pageUrl) {
    const marionettePort = config.marionettePort || (!config.userProfile ? await getFreePort() : null);
    const runtimeInfo    = {
        config,
        marionettePort,
        proxyHostName: pageUrl ? new URL(pageUrl).hostname : '',
    };

    runtimeInfo.tempProfileDir = !config.userProfile ? await createTempProfile(runtimeInfo) : null;
    runtimeInfo.activeWindowId = null;

    return runtimeInfo;
}
