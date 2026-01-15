'use strict';

function play_audio(){
    audio_create({
      'test': {
        'duration': core_storage_data.duration,
        'frequency': core_storage_data.frequency,
        'type': core_storage_data.type,
        'volume': core_storage_data.volume,
      },
    });
    audio_start('test');

    core_ui_update({
      'ids': {
        'baseLatency': audio_context.baseLatency,
        'currentTime': audio_context.currentTime,
        'outputLatency': audio_context.outputLatency,
        'sampleRate': audio_context.sampleRate,
      },
    });
}

function repo_init(){
    core_repo_init({
      'events': {
        'audio-play': {
          'onclick': play_audio,
        },
      },
      'info': '<button id=audio-play type=button>Play</button><br><table>'
        + '<tr><td>baseLatency<td id=baseLatency>'
        + '<tr><td>currentTime<td id=currentTime>'
        + '<tr><td>outputLatency<td id=outputLatency>'
        + '<tr><td>sampleRate<td id=sampleRate></table>',
      'menu_block_events': false,
      'menu_lock': true,
      'storage': {
        'duration': .15,
        'frequency': 100,
        'type': 'sine',
        'volume': 1,
      },
      'storage_menu': '<table><tr><td><input id=duration min=0 step=any type=number><td>Duration'
        + '<tr><td><input id=frequency min=0 step=any type=number><td>Frequency'
        + '<tr><td><select id=type><option value=sawtooth>sawtooth<option value=sine>sine<option value=square>square<option value=triangle>triangle</select><td>Type'
        + '<tr><td><input id=volume min=0 step=any type=number><td>Volume</table>',
      'title': 'AudioEditor.htm',
    });
}
