import moment from "moment-timezone";

// list of canonical timezones
const canonicalIANATimezones6_10_2021 = [
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Bissau",
  "Africa/Monrovia",
  "Africa/Sao_Tome",
  "America/Danmarkshavn",
  "Antarctica/Troll",
  "Atlantic/Canary",
  "Atlantic/Faroe",
  "Atlantic/Madeira",
  "Atlantic/Reykjavik",
  "Europe/Lisbon",
  "Europe/London",
  "Africa/Algiers",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/El_Aaiun",
  "Africa/Lagos",
  "Africa/Ndjamena",
  "Africa/Tunis",
  "Europe/Amsterdam",
  "Europe/Andorra",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Brussels",
  "Europe/Budapest",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Gibraltar",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Monaco",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Prague",
  "Europe/Rome",
  "Europe/Stockholm",
  "Europe/Tirane",
  "Europe/Vienna",
  "Europe/Warsaw",
  "Europe/Zurich",
  "Africa/Cairo",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Khartoum",
  "Africa/Maputo",
  "Africa/Tripoli",
  "Africa/Windhoek",
  "Asia/Amman",
  "Asia/Beirut",
  "Asia/Damascus",
  "Asia/Famagusta",
  "Asia/Gaza",
  "Asia/Hebron",
  "Asia/Jerusalem",
  "Asia/Nicosia",
  "Europe/Athens",
  "Europe/Bucharest",
  "Europe/Chisinau",
  "Europe/Helsinki",
  "Europe/Kaliningrad",
  "Europe/Kiev",
  "Europe/Riga",
  "Europe/Sofia",
  "Europe/Tallinn",
  "Europe/Uzhgorod",
  "Europe/Vilnius",
  "Europe/Zaporozhye",
  "Africa/Nairobi",
  "Antarctica/Syowa",
  "Asia/Baghdad",
  "Asia/Qatar",
  "Asia/Riyadh",
  "Europe/Istanbul",
  "Europe/Kirov",
  "Europe/Minsk",
  "Europe/Moscow",
  "Europe/Simferopol",
  "Europe/Volgograd",
  "Asia/Tehran",
  "Asia/Baku",
  "Asia/Dubai",
  "Asia/Tbilisi",
  "Asia/Yerevan",
  "Europe/Astrakhan",
  "Europe/Samara",
  "Europe/Saratov",
  "Europe/Ulyanovsk",
  "Indian/Mahe",
  "Indian/Mauritius",
  "Indian/Reunion",
  "Asia/Kabul",
  "Antarctica/Mawson",
  "Asia/Aqtau",
  "Asia/Aqtobe",
  "Asia/Ashgabat",
  "Asia/Atyrau",
  "Asia/Dushanbe",
  "Asia/Karachi",
  "Asia/Oral",
  "Asia/Qyzylorda",
  "Asia/Samarkand",
  "Asia/Tashkent",
  "Asia/Yekaterinburg",
  "Indian/Kerguelen",
  "Indian/Maldives",
  "Asia/Colombo",
  "Asia/Kolkata",
  "Asia/Kathmandu",
  "Antarctica/Vostok",
  "Asia/Almaty",
  "Asia/Bishkek",
  "Asia/Dhaka",
  "Asia/Omsk",
  "Asia/Qostanay",
  "Asia/Thimphu",
  "Asia/Urumqi",
  "Indian/Chagos",
  "Asia/Yangon",
  "Indian/Cocos",
  "Antarctica/Davis",
  "Asia/Bangkok",
  "Asia/Barnaul",
  "Asia/Ho_Chi_Minh",
  "Asia/Hovd",
  "Asia/Jakarta",
  "Asia/Krasnoyarsk",
  "Asia/Novokuznetsk",
  "Asia/Novosibirsk",
  "Asia/Pontianak",
  "Asia/Tomsk",
  "Indian/Christmas",
  "Asia/Brunei",
  "Asia/Choibalsan",
  "Asia/Hong_Kong",
  "Asia/Irkutsk",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Asia/Macau",
  "Asia/Makassar",
  "Asia/Manila",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Taipei",
  "Asia/Ulaanbaatar",
  "Australia/Perth",
  "Australia/Eucla",
  "Asia/Chita",
  "Asia/Dili",
  "Asia/Jayapura",
  "Asia/Khandyga",
  "Asia/Pyongyang",
  "Asia/Seoul",
  "Asia/Tokyo",
  "Asia/Yakutsk",
  "Pacific/Palau",
  "Australia/Adelaide",
  "Australia/Broken_Hill",
  "Australia/Darwin",
  "Antarctica/DumontDUrville",
  "Antarctica/Macquarie",
  "Asia/Ust-Nera",
  "Asia/Vladivostok",
  "Australia/Brisbane",
  "Australia/Hobart",
  "Australia/Lindeman",
  "Australia/Melbourne",
  "Australia/Sydney",
  "Pacific/Chuuk",
  "Pacific/Guam",
  "Pacific/Port_Moresby",
  "Australia/Lord_Howe",
  "Antarctica/Casey",
  "Asia/Magadan",
  "Asia/Sakhalin",
  "Asia/Srednekolymsk",
  "Pacific/Bougainville",
  "Pacific/Efate",
  "Pacific/Guadalcanal",
  "Pacific/Kosrae",
  "Pacific/Norfolk",
  "Pacific/Noumea",
  "Pacific/Pohnpei",
  "Asia/Anadyr",
  "Asia/Kamchatka",
  "Pacific/Auckland",
  "Pacific/Fiji",
  "Pacific/Funafuti",
  "Pacific/Kwajalein",
  "Pacific/Majuro",
  "Pacific/Nauru",
  "Pacific/Tarawa",
  "Pacific/Wake",
  "Pacific/Wallis",
  "Pacific/Chatham",
  "Pacific/Apia",
  "Pacific/Enderbury",
  "Pacific/Fakaofo",
  "Pacific/Tongatapu",
  "Pacific/Kiritimati",
  "America/Scoresbysund",
  "Atlantic/Azores",
  "Atlantic/Cape_Verde",
  "America/Noronha",
  "Atlantic/South_Georgia",
  "America/Araguaina",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca",
  "America/Argentina/Cordoba",
  "America/Argentina/Jujuy",
  "America/Argentina/La_Rioja",
  "America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta",
  "America/Argentina/San_Juan",
  "America/Argentina/San_Luis",
  "America/Argentina/Tucuman",
  "America/Argentina/Ushuaia",
  "America/Bahia",
  "America/Belem",
  "America/Cayenne",
  "America/Fortaleza",
  "America/Maceio",
  "America/Miquelon",
  "America/Montevideo",
  "America/Paramaribo",
  "America/Punta_Arenas",
  "America/Recife",
  "America/Santarem",
  "America/Sao_Paulo",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Atlantic/Stanley",
  "America/St_Johns",
  "America/Asuncion",
  "America/Barbados",
  "America/Blanc-Sablon",
  "America/Boa_Vista",
  "America/Campo_Grande",
  "America/Caracas",
  "America/Cuiaba",
  "America/Curacao",
  "America/Glace_Bay",
  "America/Goose_Bay",
  "America/Guyana",
  "America/Halifax",
  "America/La_Paz",
  "America/Manaus",
  "America/Martinique",
  "America/Moncton",
  "America/Port_of_Spain",
  "America/Porto_Velho",
  "America/Puerto_Rico",
  "America/Santiago",
  "America/Santo_Domingo",
  "America/Thule",
  "Atlantic/Bermuda",
  "America/Atikokan",
  "America/Bogota",
  "America/Cancun",
  "America/Detroit",
  "America/Eirunepe",
  "America/Grand_Turk",
  "America/Guayaquil",
  "America/Havana",
  "America/Indiana/Indianapolis",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Iqaluit",
  "America/Jamaica",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Lima",
  "America/Nassau",
  "America/New_York",
  "America/Nipigon",
  "America/Panama",
  "America/Pangnirtung",
  "America/Port-au-Prince",
  "America/Rio_Branco",
  "America/Thunder_Bay",
  "America/Toronto",
  "America/Bahia_Banderas",
  "America/Belize",
  "America/Chicago",
  "America/Costa_Rica",
  "America/El_Salvador",
  "America/Guatemala",
  "America/Indiana/Knox",
  "America/Indiana/Tell_City",
  "America/Managua",
  "America/Matamoros",
  "America/Menominee",
  "America/Merida",
  "America/Mexico_City",
  "America/Monterrey",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Rainy_River",
  "America/Rankin_Inlet",
  "America/Regina",
  "America/Resolute",
  "America/Swift_Current",
  "America/Tegucigalpa",
  "America/Winnipeg",
  "Pacific/Easter",
  "Pacific/Galapagos",
  "America/Boise",
  "America/Cambridge_Bay",
  "America/Chihuahua",
  "America/Creston",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Denver",
  "America/Edmonton",
  "America/Fort_Nelson",
  "America/Hermosillo",
  "America/Inuvik",
  "America/Mazatlan",
  "America/Ojinaga",
  "America/Phoenix",
  "America/Whitehorse",
  "America/Yellowknife",
  "America/Los_Angeles",
  "America/Tijuana",
  "America/Vancouver",
  "Pacific/Pitcairn",
  "America/Anchorage",
  "America/Juneau",
  "America/Metlakatla",
  "America/Nome",
  "America/Sitka",
  "America/Yakutat",
  "Pacific/Gambier",
  "Pacific/Marquesas",
  "America/Adak",
  "Pacific/Honolulu",
  "Pacific/Rarotonga",
  "Pacific/Tahiti",
  "Pacific/Niue",
  "Pacific/Pago_Pago"
];

const times = canonicalIANATimezones6_10_2021.map((timezone) => {
  const displayTime = moment().tz(timezone);
  return { [displayTime.format("h:00 a")]: timezone };
});

/**
 * hour is user-friendly hour string with am/pm. Following the format of
 * \d:00 (am|pm)
 * e.g. "1:00 pm"
 * or "9:00 am"
 */
export const getTimezonesByTime = (hour: string) =>
  times
    .map((timezoneMapping) => {
      if (timezoneMapping[hour]) {
        return timezoneMapping[hour];
      }
      return null;
    })
    .filter(Boolean);