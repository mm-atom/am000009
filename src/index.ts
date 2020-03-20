import { Linking } from 'react-native';

/**
 * 打开微信
 */
export default function open_wx(): Promise<boolean> {
	return Linking.openURL('weixin://');
}
