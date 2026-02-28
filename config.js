// ================================================================
//  SAMJIN Hub — 통합 설정 파일 (config.js)
//  외부 연동 주소·시트 정보를 이 파일 하나에서 관리합니다.
//  index.html 의 <script src="config.js"> 가 이 파일을 먼저 로드합니다.
// ================================================================


// ----------------------------------------------------------------
//  n8n 웹훅 주소
//  각 기능별 n8n 워크플로우 수신 URL 입니다.
// ----------------------------------------------------------------

/** 기성 내역 불러오기 (조회 전용) */
var WEBHOOK_LOAD_URL = 'https://158.179.174.86.sslip.io/webhook/795acae9-62b5-4ba0-b0ce-a80f9e3a5d88';

/** 기성 내역 등록 · 수정 전송 */
var WEBHOOK_EDIT_URL = 'https://158.179.174.86.sslip.io/webhook/0d46d84b-8a63-4c11-9536-bb50c5e34a5f';

/** 비밀번호 변경 전송 */
var WEBHOOK_PWD_URL = 'https://158.179.174.86.sslip.io/webhook/ae2b0e5c-37ec-42f9-a5b3-4bd7469872c4';

/** 신규 현장 등록 전송 */
var WEBHOOK_NEW_SITE_URL = 'https://158.179.174.86.sslip.io/webhook/c40cc374-0ff2-4d2f-b390-ea811ecfac71';


// ----------------------------------------------------------------
//  Google Sheets 설정
//  연동할 구글 스프레드시트의 ID와 시트명을 여기서 관리합니다.
// ----------------------------------------------------------------

/** 구글 스프레드시트 ID (URL의 /d/.../ 부분) */
var SHEET_ID = '1K3X7vKsm21Bt9kIro8JpYcZmBU03nT7l5ipgsU6JAw4';


// -- 기성리스트 시트 --

/** 기성 내역이 저장된 시트명 */
var SHEET_NAME = '기성리스트';

/** 기성리스트 조회 URL (SHEET_ID + SHEET_NAME 으로 자동 생성) */
var SHEETS_URL = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID
  + '/gviz/tq?tqx=out:json&sheet=' + encodeURIComponent(SHEET_NAME) + '&headers=1';

/** 기성리스트 시트 컬럼 순서 (헤더 행과 동일하게 유지) */
var COL_NAMES = [
  '이름', '직책', '이메일', '현장명',
  '연도', '월', '회차', '공종',
  '계약금액', '전회기성', '금회기성', '누계기성',
  '잔여금액', '기성률', '업데이트', '고유코드'
];


// -- DB정보 시트 (로그인 계정 + 현장 목록) --

/** 로그인 계정과 현장 목록이 저장된 시트명 */
var DB_SHEET_NAME = 'DB정보';

/** DB정보 조회 URL (SHEET_ID + DB_SHEET_NAME 으로 자동 생성) */
var DB_SHEETS_URL = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID
  + '/gviz/tq?tqx=out:json&sheet=' + encodeURIComponent(DB_SHEET_NAME) + '&headers=1';

/** DB정보 시트 컬럼 순서 (헤더 행과 동일하게 유지) */
var DB_COL_NAMES = ['ID', '비밀번호', '현장명', '회사', '계약금액'];
