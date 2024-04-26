import { AxiosResponse } from "axios";

export interface GerstlixOptions {
  token: string;
}

export type GameProject = "arz" | "marz" | "rrp";

type GerstlixResponse<T, D = any> = Promise<AxiosResponse<T | ErrorData, D> | BuiltInErrorData>;

declare class Gerstlix {
  public constructor(options: GerstlixOptions);
  public getInfo(server: number): GerstlixResponse<unknown>;
  public getGhettoMap(server: number): GerstlixResponse<GhettoMap>;
  public getMembers(server: number, fractionId: number): GerstlixResponse<Members>;
  public getOldPlayers(server: number): GerstlixResponse<OldPlayers>;
  public getRichPlayers(server: number): GerstlixResponse<RichPlayers>;
  public getDeputy(server: number, fractionId: number): GerstlixResponse<Deputy>;
  public getDeputyList(server: number): GerstlixResponse<DeputyList>;
  public getLeader(server: number, fractionId: number): GerstlixResponse<Leader>;
  public getLeaderList(server: number): GerstlixResponse<LeaderList>;
  public getMinister(server: number, fractionId: number): GerstlixResponse<Minister>;
  public getMinisterList(server: number): GerstlixResponse<MinisterList>;
  public getRecordFraction(server: number, fractionId: number): GerstlixResponse<ServerRecord>;
  public getRecords(server: number): GerstlixResponse<ServerRecords>;
  public getStatus(gameProject: GameProject): GerstlixResponse<Status>;
  public getPlayer(server: number, player: string): GerstlixResponse<unknown>;
  public getAdminList(server: number): GerstlixResponse<unknown>;
  public geoIp(ip: string): GerstlixResponse<geoIp>;
  // public getStatusCustom(gameProject: GameProject): Promise<unknown>;
}

export default Gerstlix;

// export interface Info {}

export interface GhettoMap extends BaseData {
  zones: {
    "0": "Никому не принадлежит";
    "11": "Grove";
    "12": "Vagos";
    "13": "Ballas";
    "14": "Aztec";
    "15": "Rifa";
    "25": "Night Wolves";
    "-1": "Не удалось определить";
  };
  lastUpdated: string;
  territories: FixedArray<number, 130>;
}

export interface Members extends BaseData {
  fractionId: number;
  fractionName: string;
  playersLastUpdate: string;
  playersCount: number;
  players: Member[];
}

export interface OldPlayers extends BaseData, BaseRating {
  players: OldPlayer[];
}

export interface RichPlayers extends BaseData, BaseRating {
  players: RichPlayer[];
}

export interface Deputy extends Omit<BaseData, "serverName">, BaseList<DeputyType> {}

export interface DeputyList extends Omit<BaseData, "serverName"> {
  players: DeputyType[];
}

export interface Leader extends BaseNDAFields, BasePlayer {}

export interface LeaderList extends Omit<BaseData, "serverName"> {
  players: Leader[];
}

export interface Minister extends BaseNDAFields, BasePlayer {}

export interface MinisterList extends Omit<BaseData, "serverName">, BaseList<Minister> {}

export interface ServerRecord extends Omit<BaseData, "serverName">, Omit<BaseList, "players"> {
  fractionId: number;
  leader: string;
  date: string;
}

export interface ServerRecords extends Omit<BaseData, "serverName"> {
  records: Omit<ServerRecord, "serverId">[];
}

export interface Status {
  "Arizona RP": BaseStatus[];
  "Arizona Mobile": BaseStatus[];
  "Rodina RP": BaseStatus[];
  Online: { "Arizona RP": number; "Rodina RP": number };
}

// export interface Player {}

// export interface AdminList {}

export interface geoIp {
  ip: string;
  country: string;
  city: string;
  region: string;
  isp: string;
}

export interface Member {
  accountId: number;
  nickname: string;
  rank: number;
  rankLabel: string;
  isLeader: boolean;
  isOnline: boolean;
  gameId: number;
  level: number;
}

export interface OldPlayer {
  name: string;
  level: number;
  isOnline: boolean;
}

export interface RichPlayer {
  name: string;
  isOnline: boolean;
}

export interface DeputyType extends Omit<BaseNDAFields, "preds" | "vigs" | "srok">, BasePlayer {}

export interface ErrorData {
  success: boolean;
  message: string;
}

export interface BuiltInErrorData {
  success: boolean;
  data: string;
}

interface BaseData {
  serverId: number;
  serverName: string;
}

interface BaseNDAFields {
  created?: string;
  preds?: number;
  vigs?: number;
  balls?: number;
  srok?: number;
  method?: number;
}

interface BasePlayer {
  id: number;
  gid: number;
  nickname: string;
  fraction: number;
}

interface BaseRating {
  ratingType: string;
  ratingName: string;
}

interface BaseList<T> {
  count: number;
  players: T[];
}

interface BaseStatus extends Omit<BaseData, 'serverId'> {
  serverName: string;
  online: number;
  maxPlayers: number;
  password: boolean;
  vkGroup: string;
  gerstlixLeaders: boolean;
  gerstlixGamePanel: boolean;
  gerstlixCourt: boolean;
  gerstlixCongress: boolean;
}

type GrowToSize<T, N extends number, A extends T[]> = A["length"] extends N ? A : GrowToSize<T, N, [...A, T]>;

type FixedArray<T, N extends number> = GrowToSize<T, N, []>;
