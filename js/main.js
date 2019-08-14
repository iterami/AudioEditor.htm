'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'play-audio': {
          'onclick': play_audio,
        },
      },
      'info': '<input id=play-audio type=button value="Play Audio">',
      'menu': true,
      'menu-block-events': false,
      'storage': {
        'duration': .1,
        'frequency': 100,
        'type': 'sine',
      },
      'storage-menu': '<table><tr><td><input id=duration><td>Duration'
        + '<tr><td><input id=frequency><td>Frequency'
        + '<tr><td><input id=type><td>Type</table>',
      'title': 'AudioEditor.htm',
    });
}
