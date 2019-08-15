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
      'info': '<input id=audio-play type=button value=Play><input id=audio-stop type=button value=Stop>'
        + '<table><tr><td id=baseLatency><td>baseLatency'
        + '<tr><td id=sampleRate><td>sampleRate</table>',
      'menu': true,
      'menu-block-events': false,
      'storage': {
        'duration': .1,
        'frequency': 100,
        'type': 'sine',
        'volume': 1,
      },
      'storage-menu': '<table><tr><td><input id=duration><td>Duration'
        + '<tr><td><input id=frequency><td>Frequency'
        + '<tr><td><select id=type><option value=sawtooth>sawtooth</option><option value=sine>sine</option><option value=square>square</option><option value=triangle>triangle</option></select><td>Type'
        + '<tr><td><input id=volume><td>Volume</table>',
      'title': 'AudioEditor.htm',
    });
}
