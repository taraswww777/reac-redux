import {combineReducers} from 'redux';
import tracks from './tracks'
import playlist from './playlists'

export default combineReducers({
	tracks, playlist
});