import {combineReducers} from 'redux';
import tracks from './tracks'
import playlist from './playlists'
import filterTracks from "./filterTracks";

export default combineReducers({
	tracks, playlist,filterTracks
});