'use strict';

function play_audio(){
    audio_stop_all();
    core_storage_save();

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

    audio_start({
      'id': 'boop',
    });

    core_ui_update({
      'ids': {
        'baseLatency': audio_context.baseLatency,
        'destination-channelCount': audio_context.destination.channelCount,
        'destination-channelCountMode': audio_context.destination.channelCountMode,
        'destination-channelInterpretation': audio_context.destination.channelInterpretation,
        'destination-maxChannelCount': audio_context.destination.maxChannelCount,
        'destination-numberOfInputs': audio_context.destination.numberOfInputs,
        'destination-numberOfOutputs': audio_context.destination.numberOfOutputs,
        'listener-forwardX-value': audio_context.listener.forwardX.value,
        'listener-forwardY-value': audio_context.listener.forwardY.value,
        'listener-forwardZ-value': audio_context.listener.forwardZ.value,
        'listener-positionX-value': audio_context.listener.positionX.value,
        'listener-positionY-value': audio_context.listener.positionY.value,
        'listener-positionZ-value': audio_context.listener.positionZ.value,
        'listener-upX-value': audio_context.listener.upX.value,
        'listener-upY-value': audio_context.listener.upY.value,
        'listener-upZ-value': audio_context.listener.upZ.value,
        'sampleRate': audio_context.sampleRate,
      },
    });
}
