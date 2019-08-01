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
      },
      'storage-menu': '<table><tr><td><input id=duration><td>Duration</table>',
      'title': 'AudioEditor.htm',
    });
}
