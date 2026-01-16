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
        'channelCount': audio_context.destination.channelCount,
        'channelCountMode': audio_context.destination.channelCountMode,
        'channelInterpretation': audio_context.destination.channelInterpretation,
        'currentTime': audio_context.currentTime,
        'maxChannelCount': audio_context.destination.maxChannelCount,
        'numberOfInputs': audio_context.destination.numberOfInputs,
        'numberOfOutputs': audio_context.destination.numberOfOutputs,
        'outputLatency': audio_context.outputLatency,
        'sampleRate': audio_context.sampleRate,
        'state': audio_context.state,
      },
    });
}

function repo_init(){
    core_repo_init({
      'events': {
        'audio_play': {
          'onclick': play_audio,
        },
      },
      'menu': true,
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
