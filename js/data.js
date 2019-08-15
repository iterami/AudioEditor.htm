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
        'sampleRate': audio_context.sampleRate,
      },
    });
}
