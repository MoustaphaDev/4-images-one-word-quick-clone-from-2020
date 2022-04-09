import parseImagename from "../Helpers/parseImageName";
import * as Images from "./Images";

export type LevelsType = {
  id: number;
  solution: string[];
  image: string;
}[];

const Levels: LevelsType = [
  {
    id: 1,
    solution: parseImagename(Images.DurImg),
    image: Images.DurImg,
  },
  {
    id: 2,
    solution: parseImagename(Images.CruImg),
    image: Images.CruImg,
  },
  {
    id: 3,
    solution: parseImagename(Images.ChauffageImg),
    image: Images.ChauffageImg,
  },
  {
    id: 4,
    solution: parseImagename(Images.ConfusionImg),
    image: Images.ConfusionImg,
  },
  {
    id: 5,
    solution: parseImagename(Images.CroixImg),
    image: Images.CroixImg,
  },
  {
    id: 6,
    solution: parseImagename(Images.ChaudImg),
    image: Images.ChaudImg,
  },
  {
    id: 7,
    solution: parseImagename(Images.BaignoireImg),
    image: Images.BaignoireImg,
  },
  {
    id: 8,
    solution: parseImagename(Images.EteImg),
    image: Images.EteImg,
  },
  {
    id: 9,
    solution: parseImagename(Images.FroidImg),
    image: Images.FroidImg,
  },
  {
    id: 10,
    solution: parseImagename(Images.JeuImg),
    image: Images.JeuImg,
  },
  {
    id: 11,
    solution: parseImagename(Images.MelangeImg),
    image: Images.MelangeImg,
  },
  {
    id: 12,
    solution: parseImagename(Images.MouilleImg),
    image: Images.MouilleImg,
  },
  {
    id: 13,
    solution: parseImagename(Images.PousserImg),
    image: Images.PousserImg,
  },
  {
    id: 14,
    solution: parseImagename(Images.PretendreImg),
    image: Images.PretendreImg,
  },
  {
    id: 15,
    solution: parseImagename(Images.ProgrammeImg),
    image: Images.ProgrammeImg,
  },
  {
    id: 16,
    solution: parseImagename(Images.SecImg),
    image: Images.SecImg,
  },
  {
    id: 17,
    solution: parseImagename(Images.SilenceImg),
    image: Images.SilenceImg,
  },
  {
    id: 18,
    solution: parseImagename(Images.TerreImg),
    image: Images.TerreImg,
  },
  {
    id: 19,
    solution: parseImagename(Images.VoitureImg),
    image: Images.VoitureImg,
  },
];

export default Levels;
