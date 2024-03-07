'use strict';

function play_audio(){
    audio_stop_all();
    core_storage_save([
      'duration',
      'frequency',
      'type',
      'volume',
    ]);

    audio_create({
      'audios': {
        'boop': {
          'duration': core_storage_data['duration'],
          'frequency': core_storage_data['frequency'],
          'type': core_storage_data['type'],
          'volume': core_storage_data['volume'],
        },
      },
    });

    audio_start('boop');

    core_ui_update({
      'ids': {
        'baseLatency': audio_context.baseLatency,
        'destination-channelCount': audio_context.destination.channelCount,
        'destination-channelCountMode': audio_context.destination.channelCountMode,
        'destination-channelInterpretation': audio_context.destination.channelInterpretation,
        'destination-maxChannelCount': audio_context.destination.maxChannelCount,
        'destination-numberOfInputs': audio_context.destination.numberOfInputs,
        'destination-numberOfOutputs': audio_context.destination.numberOfOutputs,
        'sampleRate': audio_context.sampleRate,
      },
    });

    if(audio_context.listener.forwardX){
        core_ui_update({
          'ids': {
            'listener-forwardX-value': audio_context.listener.forwardX.value,
            'listener-forwardY-value': audio_context.listener.forwardY.value,
            'listener-forwardZ-value': audio_context.listener.forwardZ.value,
            'listener-positionX-value': audio_context.listener.positionX.value,
            'listener-positionY-value': audio_context.listener.positionY.value,
            'listener-positionZ-value': audio_context.listener.positionZ.value,
            'listener-upX-value': audio_context.listener.upX.value,
            'listener-upY-value': audio_context.listener.upY.value,
            'listener-upZ-value': audio_context.listener.upZ.value,
          },
        });
    }
}

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
      'info': '<button id=audio-play type=button>Play</button><button id=audio-stop type=button>Stop</button><br>'
        + '<span id=properties-tabs></span><div id=properties-tabcontent></div>',
      'menu-block-events': false,
      'menu-lock': true,
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
      'tabs': {
        'properties': {
          'content': '<table><tr class=header><td>audio_context<td>Properties'
            + '<tr><td id=baseLatency><td>baseLatency'
            + '<tr><td id=destination-channelCount><td>destination.channelCount'
            + '<tr><td id=destination-channelCountMode><td>destination.channelCountMode'
            + '<tr><td id=destination-channelInterpretation><td>destination.channelInterpretation'
            + '<tr><td id=destination-maxChannelCount><td>destination.maxChannelCount'
            + '<tr><td id=destination-numberOfInputs><td>destination.numberOfInputs'
            + '<tr><td id=destination-numberOfOutputs><td>destination.numberOfOutputs'
            + '<tr><td id=listener-forwardX-value><td>listener.forwardX.value'
            + '<tr><td id=listener-forwardY-value><td>listener.forwardY.value'
            + '<tr><td id=listener-forwardZ-value><td>listener.forwardZ.value'
            + '<tr><td id=listener-positionX-value><td>listener.positionX.value'
            + '<tr><td id=listener-positionY-value><td>listener.positionY.value'
            + '<tr><td id=listener-positionZ-value><td>listener.positionZ.value'
            + '<tr><td id=listener-upX-value><td>listener.upX.value'
            + '<tr><td id=listener-upY-value><td>listener.upY.value'
            + '<tr><td id=listener-upZ-value><td>listener.upZ.value'
            + '<tr><td id=sampleRate><td>sampleRate</table>',
          'group': 'properties',
          'label': 'Audio Properties',
        },
      },
      'title': 'AudioEditor.htm',
    });
}
