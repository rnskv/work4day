import PassportVk from 'passport-vkontakte';
import configs from '../../../configs'

const PassportVkStrategy = new PassportVk.Strategy(
    {
        clientID:     configs.vk.clientID,
        clientSecret: configs.vk.clientSecret,
        callbackURL:  configs.vk.callbackURL
    },
    function myVerifyCallbackFn(accessToken, refreshToken, params, profile, done) {
        console.log('vk auth cb', accessToken, profile);
    }
)

export default PassportVkStrategy;
