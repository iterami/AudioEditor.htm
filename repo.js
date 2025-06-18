'use strict';

function play_audio(){
    core_storage_save([
      'duration',
      'frequency',
      'type',
      'volume',
    ]);

    audio_create({
      'test': {
        'duration': core_storage_data.duration,
        'frequency': core_storage_data.frequency,
        'type': core_storage_data.type,
        'volume': core_storage_data.volume,
      },
    });
    audio_start('test');
}

function repo_init(){
    core_repo_init({
      'events': {
        'audio-play': {
          'onclick': play_audio,
        },
      },
      'info': '<button id=audio-play type=button>Play</button><br>',
      'menu_block_events': false,
      'menu_lock': true,
      'storage': {
        'duration': .1,
        'frequency': 100,
        'type': 'sine',
        'volume': 1,
      },
      'storage-menu': '<table><tr><td><input id=duration min=0 step=any type=number><td>Duration'
        + '<tr><td><input id=frequency min=0 step=any type=number><td>Frequency'
        + '<tr><td><select id=type><option value=sawtooth>sawtooth<option value=sine>sine<option value=square>square<option value=triangle>triangle</select><td>Type'
        + '<tr><td><input id=volume min=0 step=any type=number><td>Volume</table>',
      'title': 'AudioEditor.htm',
    });
}
