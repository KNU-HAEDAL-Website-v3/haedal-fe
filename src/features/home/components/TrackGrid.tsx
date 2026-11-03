import type {CSSProperties} from 'react';
import {SectionHeading, useModal} from '../../../shared';
import {TRACKS} from '../data/tracks';
import {TrackDialog} from './dialogs/TrackDialog';

export function TrackGrid() {
    const modal = useModal();
    return (
        <section className="section" id="tracks">
            <SectionHeading title="교육 트랙" />
            <div className="track-grid">
                {TRACKS.map((track, index) => (
                    <button
                        key={track.name}
                        className="track"
                        style={{'--accent': track.color} as CSSProperties}
                        onClick={() => modal.open(<TrackDialog track={track} />)}
                    >
                        <span className="pixel">CLASS {String(index + 1).padStart(2, '0')}</span>
                        <span className="track-icon">{track.icon}</span>
                        <h3>{track.name}</h3>
                        <p>{track.tagline}</p>
                    </button>
                ))}
            </div>
        </section>
    );
}
