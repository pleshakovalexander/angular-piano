import { Signature } from '../models';

export interface Octave {
  name: string;
  code: string;
}

export function getAvailableOctaves(type: Signature): Octave[] {
  if (type === Signature.sharp) {
    return [
      { name: 'До мажор', code: 'C major' },
      { name: 'Ля минор', code: 'A minor' },
      { name: 'Соль мажор', code: 'G major' },
      { name: 'Ми минор', code: 'E minor' },
      { name: 'Ре мажор', code: 'D major' },
      { name: 'Си минор', code: 'B minor' },
      { name: 'Ля мажор', code: 'A major' },
      { name: 'Фа-диез минор', code: 'F# minor' },
      { name: 'Ми мажор', code: 'E major' },
      { name: 'До-диез минор', code: 'C# minor' }
    ];
  }
  if (type === Signature.flat) {
    return [
      { name: 'До мажор', code: 'C major' },
      { name: 'Ля минор', code: 'A minor' },
      { name: 'Фа мажор', code: 'F major' },
      { name: 'Ре минор', code: 'D minor' },
      { name: 'Си-бемоль мажор', code: 'Bb major' },
      { name: 'Соль минор', code: 'G minor' },
      { name: 'Ми-бемоль мажор', code: 'Eb major' },
      { name: 'До минор', code: 'C minor' },
      { name: 'Ля-бемоль мажор', code: 'Ab major' },
      { name: 'Фа минор', code: 'F minor' }
    ];
  }
  return [];
}
