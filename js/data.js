'use strict';

function play_audio(){
    audio_stop_all();
    core_storage_save();

    audio_create({
      'audios': {
        'boop': {
          'duration': core_storage_data['duration'],
        },
      },
    });

    audio_start({
      'id': 'boop',
    });
}
