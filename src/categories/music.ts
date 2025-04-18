import { ScriptCategory } from "../types/index.js";

/**
 * Music-related scripts.
 * * play_pause_music: Play or pause the current music
 * * next_track: Skip to the next track
 * * previous_track: Go back to the previous track
 */

export const musicCategory: ScriptCategory = {
  name: "music",
  description: "Music-related scripts",
  scripts: [
    {
      name: "play_pause_music",
      description:
        "Play or pause the current song in the default music player on the system",
      script: `
                tell application "System Events"
                    tell application "Music" to playpause
                    return "Toggled play/pause"
                end tell
            `,
    },
    {
      name: "next_track",
      description:
        "Skip to the next track in the default music player on the system",
      script: `
                tell application "System Events"
                    tell application "Music" to next track
                    return "Skipped to the next track"
                end tell
            `,
    },
    {
      name: "previous_track",
      description:
        "Go back to the previous track in the default music player on the system",
      script: `
                tell application "System Events"
                    tell application "Music" to previous track
                    return "Went back to the previous track"
                end tell
            `,
    },
    {
      name: "get_info_current_track",
      description:
        "Get information about the current track in the default music player on the system",
      script: `
                tell application "System Events"
                    tell application "Music"
                        set currentTrack to current track
                        set trackName to name of currentTrack
                        set artistName to artist of currentTrack
                        set albumName to album of currentTrack
                        set trackDuration to duration of currentTrack
                        set trackInfo to "Track: " & trackName & ", Artist: " & artistName & ", Album: " & albumName & ", Duration: " & trackDuration
                        return trackInfo
                    end tell
                end tell
            `,
    },
  ],
};
