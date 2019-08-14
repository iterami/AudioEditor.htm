'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'audio-play': {
          'onclick': play_audio,
        },
        'audio-stop': {
          'onclick': audio_stop_all,
        },
      },
      'info': '<input id=audio-play type=button value=Play><input id=audio-stop type=button value=Stop>',
      'menu': true,
      'menu-block-events': false,
      'storage': {
        'duration': .1,
        'frequency': 100,
        'type': 'sine',
      },
      'storage-menu': '<table><tr><td><input id=duration><td>Duration'
        + '<tr><td><input id=frequency><td>Frequency'
        + '<tr><td><select id=type><option value=sawtooth>sawtooth</option><option value=sine>sine</option><option value=square>square</option><option value=triangle>triangle</option></select><td>Type</table>',
      'title': 'AudioEditor.htm',
    });
}
