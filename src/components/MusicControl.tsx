import { useCallback, useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const preferenceKey = 'niuxverse_music_paused';

export function MusicControl() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const requestRef = useRef(0);
  const wantedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [starting, setStarting] = useState(false);
  const [failed, setFailed] = useState(false);

  const start = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    const request = ++requestRef.current;
    wantedRef.current = true;
    setStarting(true);
    setFailed(false);
    try {
      if (audio.error) audio.load();
      await audio.play();
    } catch (error) {
      if (request !== requestRef.current) return;
      wantedRef.current = false;
      setPlaying(false);
      // Autoplay denial is expected: the visible button provides a user gesture.
      setFailed(!(error instanceof DOMException && error.name === 'NotAllowedError'));
    } finally {
      if (request === requestRef.current) setStarting(false);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current!;
    audio.volume = 0.3;
    const onPlay = () => {
      if (!wantedRef.current) { audio.pause(); return; }
      setPlaying(true); setStarting(false); setFailed(false);
    };
    const onPause = () => setPlaying(false);
    const onError = () => { setPlaying(false); setStarting(false); setFailed(true); wantedRef.current = false; };
    audio.addEventListener('playing', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('error', onError);
    let stopped = false;
    try { stopped = localStorage.getItem(preferenceKey) === 'true'; } catch { /* Storage may be disabled. */ }
    if (!stopped) void start();
    return () => {
      ++requestRef.current; wantedRef.current = false;
      audio.removeEventListener('playing', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('error', onError);
      audio.pause();
    };
  }, [start]);

  const toggle = () => {
    if (playing || starting) {
      ++requestRef.current; wantedRef.current = false;
      audioRef.current?.pause(); setPlaying(false); setStarting(false);
      try { localStorage.setItem(preferenceKey, 'true'); } catch { /* Optional preference. */ }
    } else {
      try { localStorage.setItem(preferenceKey, 'false'); } catch { /* Optional preference. */ }
      void start();
    }
  };
  const active = playing || starting;
  return <>
    <audio ref={audioRef} src="/SONG/Vector%20Pulse.mp3" loop preload="metadata" />
    <button type="button" className="music-toggle" onClick={toggle} aria-label={active ? 'Stop background music' : 'Play background music'} aria-pressed={playing} title={active ? 'Stop background music' : 'Play background music'}>
      {playing ? <Volume2 size={17} aria-hidden="true" /> : <VolumeX size={17} aria-hidden="true" />}
      <span>{starting ? 'Starting…' : playing ? 'Music on' : failed ? 'Retry music' : 'Play music'}</span>
    </button>
    <span className="sr-only" role="status">{failed ? 'Music could not play. Use the music button to retry.' : ''}</span>
  </>;
}
