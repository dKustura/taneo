import Flags, { FlagComponent } from 'country-flag-icons/react/3x2';

const YugoslaviaFlag = (props: any) => (
  // Viewbox is set like this to make this flag look like other 3x2 sized flags
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="125 0 750 500" {...props}>
    <path d="M0 0h1000v500H0z" fill="#003893" />
    <path d="M0 166.667h1000V500H0z" fill="#fff" />
    <g fill="#de0000">
      <path d="M0 333.333h1000V500H0z" />
      <path
        d="M500 97.716l34.193 105.222 110.638.005-89.506 65.035 34.185 105.225L500 308.173l-89.511 65.029 34.185-105.225-89.506-65.035 110.638-.005z"
        fill-rule="evenodd"
        stroke="#fcd115"
        stroke-width="8.89"
      />
    </g>
  </svg>
);

export const FLAGS: { [key: string]: FlagComponent } = {
  Croatia: Flags.HR,
  Slovenia: Flags.SI,
  Serbia: Flags.RS,
  BosniaAndHerzegovina: Flags.BA,
  Montenegro: Flags.ME,
  Macedonia: Flags.MK,
  Yugoslavia: YugoslaviaFlag,
};
