export interface ResultWrapper {
  code: number;
  msg: string;

  data?: any;
}

export interface LoginResult {
  user_id: string;
  email: string;
  nick_name: string;
  auth_token: string;
  token_expires_at: number;
  avatar: string;
  invitation_code: string;
  inviter_code: string;
  verify_code_url: string;
  mac_addr: string;
  domain: string;
  ab_code: string;
  geo_key: string;
  privilege: number;
  phone: string;
  phone_code: string;
  params: any;
  trust_list: Array<any>;
}

export interface Hub {
  station_id: number;
  station_sn: string;
  station_name: string;
  station_model: string;
  time_zone: string;
  wifi_ssid: string;
  ip_addr: string;
  wifi_mac: string;
  sub1g_mac: string;
  main_sw_version: string;
  main_hw_version: string;
  sec_sw_version: string;
  sec_hw_version: string;
  volume: string;
  main_sw_time: number;
  sec_sw_time: number;
  setup_code: string;
  setup_id: string;
  device_type: number;
  event_num: number;
  sku_number: string;
  lot_number: string;
  create_time: number;
  update_time: number;
  status: number;
  station_status: number;
  status_change_time: number;
  p2p_did: string;
  push_did: string;
  p2p_license: string;
  push_license: string;
  ndt_did: string;
  ndt_license: string;
  wakeup_flag: number;
  p2p_conn: string;
  app_conn: string;
  wipn_enc_dec_key: string;
  wipn_ndt_aes128key: string;
  query_server_did: string;
  prefix: string;
  wakeup_key: string;
  member: {
    family_id: number;
    station_sn: string;
    admin_user_id: string;
    member_user_id: string;
    short_user_id: string;
    member_type: number;
    permissions: number;
    member_nick: string;
    action_user_id: string;
    fence_state: number;
    extra: string;
    member_avatar: string;
    create_time: number;
    update_time: number;
    status: number;
    email: string;
    nick_name: string;
    avatar: string;
    action_user_email: string;
    action_user_name: string;
  };

  params: Array<Parameter>;
  devices: Array<any>; // TODO
  sensor_info: null;
  is_init_complete: boolean;
}

export interface Parameter {
  param_id: number;
  station_sn: string;
  param_type: number;
  param_value: string;
  create_time: number;
  update_time: number;
  status: number;
}

export interface Device {
  device_id: number;
  is_init_complete: boolean;
  device_sn: string;
  device_name: string;
  device_model: string;
  time_zone: string;
  device_type: number;
  device_channel: number;
  station_sn: string;
  schedule: string;
  schedulex: string;
  wifi_mac: string;
  sub1g_mac: string;
  main_sw_version: string;
  main_hw_version: string;
  sec_sw_version: string;
  sec_hw_version: string;
  sector_id: number;
  event_num: number;
  wifi_ssid: string;
  ip_addr: string;
  main_sw_time: number;
  sec_sw_time: number;
  bind_time: number;
  cover_path: string;
  cover_time: number;
  local_ip: string;
  language: string;
  sku_number: string;
  lot_number: string;
  create_time: number;
  update_time: number;
  status: number;
}

export interface DeviceRequest {
  device_sn: string;
  num: number;
  orderby: string;
  page: number;
  station_sn: string;
}

export interface FullDevice {
  device_id: number;
  is_init_complete: boolean;
  device_sn: string;
  device_name: string;
  device_model: string;
  time_zone: string;
  device_type: number;
  device_channel: number;
  station_sn: string;
  schedule: string;
  schedulex: string;
  wifi_mac: string;
  sub1g_mac: string;
  main_sw_version: string;
  main_hw_version: string;
  sec_sw_version: string;
  sec_hw_version: string;
  sector_id: number;
  event_num: number;
  wifi_ssid: string;
  ip_addr: string;
  main_sw_time: number;
  sec_sw_time: number;
  bind_time: number;
  cover_path: string;
  cover_time: number;
  local_ip: string;
  language: string;
  sku_number: string;
  lot_number: string;
  create_time: number;
  update_time: number;
  status: number;
  svr_domain: string;
  svr_port: number;
  station_conn: {
    station_sn: string;
    station_name: string;
    station_model: string;
    main_sw_version: string;
    main_hw_version: string;
    p2p_did: string;
    push_did: string;
    ndt_did: string;
    p2p_conn: string;
    app_conn: string;
    binded: false;
    setup_code: string;
    setup_id: string;
    wifi_mac: string;
  };
  family_num: number;
  member: {
    family_id: number;
    station_sn: string;
    admin_user_id: string;
    member_user_id: string;
    short_user_id: string;
    member_type: number;
    permissions: number;
    member_nick: string;
    action_user_id: string;
    fence_state: number;
    extra: string;
    member_avatar: string;
    create_time: number;
    update_time: number;
    status: number;
    email: string;
    nick_name: string;
    avatar: string;
    action_user_email: string;
    action_user_name: string;
  };
  permission: null;
  params: Array<Parameter>;
  pir_total: number;
  pir_none: number;
  pir_missing: number;
  week_pir_total: number;
  week_pir_none: number;
  month_pir_total: number;
  month_pir_none: number;
  charging_days: number;
  charing_total: number;
  charging_reserve: number;
  charging_missing: number;
}

export interface DskKey {
  enabled: boolean;
  dsk_keys: Array<{
    station_sn: string;
    dsk_key: string;
    expiration: number;
    about_to_be_replaced: boolean;
  }>;
}

export interface HistoryRecordEntry {
  monitor_id: number;
  transfer_monitor_id: number;
  station_sn: string;
  device_sn: string;
  storage_type: number;
  storage_path: string;
  hevc_storage_path: string;
  cloud_path: string;
  frame_num: number;
  thumb_path: string;
  thumb_data: string;
  start_time: number;
  end_time: number;
  cipher_id: number;
  cipher_user_id: string;
  has_human: number;
  volume: string;
  vision: number;
  device_name: string;
  device_type: number;
  video_type: number;
  extra: string;
  user_range_id: number;
  viewed: boolean;
  create_time: number;
  update_time: number;
  status: number;
  station_name: string;
  p2p_did: string;
  push_did: string;
  p2p_license: string;
  push_license: string;
  ndt_did: string;
  ndt_license: string;
  wakeup_flag: number;
  p2p_conn: string;
  app_conn: string;
  wipn_enc_dec_key: string;
  wipn_ndt_aes128key: string;
  query_server_did: string;
  prefix: string;
  wakeup_key: string;
  ai_faces: Array<{
    is_stranger: number;
    face_url: string;
    owner_id: string;
    user_range_id: number;
  }>;
  is_favorite: boolean;
  storage_alias: number;
}

export interface Stream {
  url: string;
}

export enum DeviceType {
  //List retrieved from com.oceanwing.battery.cam.binder.model.QueryDeviceData
  BATTERY_DOORBELL = 7,
  BATTERY_DOORBELL_2 = 16,
  CAMERA = 1,
  CAMERA2 = 9,
  CAMERA2C = 8,
  CAMERA2C_PRO = 15,
  CAMERA2_PRO = 14,
  CAMERA_E = 4,
  DOORBELL = 5,
  FLOODLIGHT = 3,
  INDOOR_CAMERA = 30,
  INDOOR_CAMERA_1080 = 34,
  INDOOR_PT_CAMERA = 31,
  INDOOR_PT_CAMERA_1080 = 35,
  KEYPAD = 11,
  LOCK_ADVANCED = 51,
  LOCK_ADVANCED_NO_FINGER = 53,
  LOCK_BASIC = 50,
  LOCK_BASIC_NO_FINGER = 52,
  MOTION_SENSOR = 10,
  SENSOR = 2,
  SOLO_CAMERA = 32,
  SOLO_CAMERA_PRO = 33,
  STATION = 0
}

export enum GuardMode {
  AWAY = 0,
  HOME = 1,
  DISARMED = 63,
  SCHEDULE = 2,
  GEO = 47,
  CUSTOM1 = 3,
  CUSTOM2 = 4,
  CUSTOM3 = 5,
  OFF = 6
}
