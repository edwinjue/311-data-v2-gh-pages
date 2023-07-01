const councils = [
  {
    OBJECTID: 1,
    NAME: 'ARLETA NC',
    WADDRESS: 'http://www.arletanc.org/',
    DWEBSITE: 'http://empowerla.org/ANC',
    DEMAIL: 'ANC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 6,
    CERTIFIED: '2002-10-22 00:00:00',
    TOOLTIP: 'ARLETA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=6',
    SERVICE_RE: 'REGION 1 - NORTH EAST VALLEY',
  },
  {
    OBJECTID: 2,
    NAME: 'ARROYO SECO NC',
    WADDRESS: 'http://www.asnc.us/',
    DWEBSITE: 'http://empowerla.org/ASNC',
    DEMAIL: 'ASNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 42,
    CERTIFIED: '2002-10-02 00:00:00',
    TOOLTIP: 'ARROYO SECO NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=42',
    SERVICE_RE: 'REGION 8 - NORTH EAST LA',
  },
  {
    OBJECTID: 3,
    NAME: 'ARTS DISTRICT LITTLE TOKYO NC',
    WADDRESS: 'http://www.hcncla.org/',
    DWEBSITE: 'http://empowerla.org/HCNC',
    DEMAIL: 'HCNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 46,
    CERTIFIED: '2002-04-27 00:00:00',
    TOOLTIP: 'ARTS DISTRICT LITTLE TOKYO NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=46',
    SERVICE_RE: 'REGION 6 - CENTRAL 2',
  },
  {
    OBJECTID: 4,
    NAME: 'ATWATER VILLAGE NC',
    WADDRESS: 'http://www.atwatervillage.org/',
    DWEBSITE: 'http://empowerla.org/AVNC',
    DEMAIL: 'AVNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 37,
    CERTIFIED: '2003-02-11 00:00:00',
    TOOLTIP: 'ATWATER VILLAGE NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=37',
    SERVICE_RE: 'REGION 7 - EAST',
  },
  {
    OBJECTID: 5,
    NAME: 'BEL AIR-BEVERLY CREST NC',
    WADDRESS: 'http://babcnc.org/',
    DWEBSITE: 'http://empowerla.org/BABCNC',
    DEMAIL: 'BABCNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 64,
    CERTIFIED: '2002-10-08 00:00:00',
    TOOLTIP: 'BEL AIR-BEVERLY CREST NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=64',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 6,
    NAME: 'BOYLE HEIGHTS NC',
    WADDRESS: 'http://bhnc.net/',
    DWEBSITE: 'http://empowerla.org/BHNC',
    DEMAIL: 'BHNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 50,
    CERTIFIED: '2002-05-21 00:00:00',
    TOOLTIP: 'BOYLE HEIGHTS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=50',
    SERVICE_RE: 'REGION 8 - NORTH EAST LA',
  },
  {
    OBJECTID: 7,
    NAME: 'CANOGA PARK NC',
    WADDRESS: 'http://www.canogaparknc.org/',
    DWEBSITE: 'http://empowerla.org/CPNC',
    DEMAIL: 'CPNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 13,
    CERTIFIED: '2002-06-18 00:00:00',
    TOOLTIP: 'CANOGA PARK NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=13',
    SERVICE_RE: 'REGION 3 - SOUTH WEST VALLEY',
  },
  {
    OBJECTID: 8,
    NAME: 'CENTRAL ALAMEDA NC',
    WADDRESS: 'https://centralalameda.com/',
    DWEBSITE: 'https://empowerla.org/canc/',
    DEMAIL: 'CANC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 110,
    CERTIFIED: '2003-09-30 00:00:00',
    TOOLTIP: 'CENTRAL ALAMEDA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=110',
    SERVICE_RE: 'REGION 9 - SOUTH LA 2',
  },
  {
    OBJECTID: 9,
    NAME: 'CENTRAL HOLLYWOOD NC',
    WADDRESS: 'http://www.chnc.org/',
    DWEBSITE: 'http://empowerla.org/CHNC',
    DEMAIL: 'CHNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 32,
    CERTIFIED: '2002-04-09 00:00:00',
    TOOLTIP: 'CENTRAL HOLLYWOOD NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=32',
    SERVICE_RE: 'REGION 5 - CENTRAL 1',
  },
  {
    OBJECTID: 10,
    NAME: 'CENTRAL SAN PEDRO NC',
    WADDRESS: 'http://centralsanpedro.org/',
    DWEBSITE: 'http://empowerla.org/CENTRALSPNC',
    DEMAIL: 'CentralSPNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 95,
    CERTIFIED: '2002-02-12 00:00:00',
    TOOLTIP: 'CENTRAL SAN PEDRO NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=95',
    SERVICE_RE: 'REGION 12 - HARBOR',
  },
  {
    OBJECTID: 11,
    NAME: 'CHATSWORTH NC',
    WADDRESS: 'http://chatsworthcouncil.org/',
    DWEBSITE: 'http://empowerla.org/CNC',
    DEMAIL: 'CNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 99,
    CERTIFIED: '2003-04-29 00:00:00',
    TOOLTIP: 'CHATSWORTH NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=99',
    SERVICE_RE: 'REGION 2 - NORTH WEST VALLEY',
  },
  {
    OBJECTID: 12,
    NAME: 'COASTAL SAN PEDRO NC',
    WADDRESS: 'http://www.cspnc.org/',
    DWEBSITE: 'http://empowerla.org/CSPNC',
    DEMAIL: 'CSPNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 96,
    CERTIFIED: '2001-12-11 00:00:00',
    TOOLTIP: 'COASTAL SAN PEDRO NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=96',
    SERVICE_RE: 'REGION 12 - HARBOR',
  },
  {
    OBJECTID: 13,
    NAME: 'COMMUNITY AND NEIGHBORS FOR NINTH DISTRICT UNITY (CANNDU)',
    WADDRESS: 'http://www.canndunc.org/',
    DWEBSITE: 'http://empowerla.org/CANNDU',
    DEMAIL: 'CANNDU@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 86,
    CERTIFIED: '2003-03-11 00:00:00',
    TOOLTIP: 'COMMUNITY AND NEIGHBORS FOR NINTH DISTRICT UNITY (CANNDU)',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=86',
    SERVICE_RE: 'REGION 9 - SOUTH LA 2',
  },
  {
    OBJECTID: 14,
    NAME: 'DEL REY NC',
    WADDRESS: 'http://delreync.org/',
    DWEBSITE: 'http://empowerla.org/DRNC',
    DEMAIL: 'DRNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 70,
    CERTIFIED: '2003-10-28 00:00:00',
    TOOLTIP: 'DEL REY NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=70',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 15,
    NAME: 'DOWNTOWN LOS ANGELES',
    WADDRESS: 'http://dlanc.com/',
    DWEBSITE: 'http://empowerla.org/DLANC',
    DEMAIL: 'DLANC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 52,
    CERTIFIED: '2002-04-27 00:00:00',
    TOOLTIP: 'DOWNTOWN LOS ANGELES',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=52',
    SERVICE_RE: 'REGION 6 - CENTRAL 2',
  },
  {
    OBJECTID: 16,
    NAME: 'EAGLE ROCK NC',
    WADDRESS: 'http://www.eaglerockcouncil.org/',
    DWEBSITE: 'http://empowerla.org/ERNC',
    DEMAIL: 'ERNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 40,
    CERTIFIED: '2002-04-02 00:00:00',
    TOOLTIP: 'EAGLE ROCK NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=40',
    SERVICE_RE: 'REGION 8 - NORTH EAST LA',
  },
  {
    OBJECTID: 17,
    NAME: 'EAST HOLLYWOOD NC',
    WADDRESS: 'http://easthollywood.net/',
    DWEBSITE: 'http://empowerla.org/EHNC',
    DEMAIL: 'EHNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 34,
    CERTIFIED: '2007-04-19 00:00:00',
    TOOLTIP: 'EAST HOLLYWOOD NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=34',
    SERVICE_RE: 'REGION 5 - CENTRAL 1',
  },
  {
    OBJECTID: 18,
    NAME: 'ELYSIAN VALLEY RIVERSIDE NC',
    WADDRESS: 'NULL',
    DWEBSITE: 'http://empowerla.org/EVRNC',
    DEMAIL: 'EVRNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 43,
    CERTIFIED: '2002-07-09 00:00:00',
    TOOLTIP: 'ELYSIAN VALLEY RIVERSIDE NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=43',
    SERVICE_RE: 'REGION 7 - EAST',
  },
  {
    OBJECTID: 19,
    NAME: 'EMPOWERMENT CONGRESS CENTRAL AREA NC',
    WADDRESS: 'https://www.eccandc.org/',
    DWEBSITE: 'https://empowerla.org/eccandc/',
    DEMAIL: 'ECCANDC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 81,
    CERTIFIED: '2002-03-23 00:00:00',
    TOOLTIP: 'EMPOWERMENT CONGRESS CENTRAL AREA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=81',
    SERVICE_RE: 'REGION 10 - SOUTH LA 1',
  },
  {
    OBJECTID: 20,
    NAME: 'EMPOWERMENT CONGRESS NORTH AREA NC',
    WADDRESS: 'http://www.nandc.org/',
    DWEBSITE: 'http://empowerla.org/ECNANDC',
    DEMAIL: 'ECNANDC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 77,
    CERTIFIED: '2002-04-27 00:00:00',
    TOOLTIP: 'EMPOWERMENT CONGRESS NORTH AREA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=77',
    SERVICE_RE: 'REGION 10 - SOUTH LA 1',
  },
  {
    OBJECTID: 21,
    NAME: 'EMPOWERMENT CONGRESS SOUTHEAST AREA NDC',
    WADDRESS: 'NULL',
    DWEBSITE: 'https://empowerla.org/ecseandc/',
    DEMAIL: 'ECSEANDC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 87,
    CERTIFIED: '2002-03-23 00:00:00',
    TOOLTIP: 'EMPOWERMENT CONGRESS SOUTHEAST AREA NDC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=87',
    SERVICE_RE: 'REGION 9 - SOUTH LA 2',
  },
  {
    OBJECTID: 22,
    NAME: 'EMPOWERMENT CONGRESS SOUTHWEST AREA NDC',
    WADDRESS: 'http://southwestnc.org/',
    DWEBSITE: 'http://empowerla.org/ECSWANDC',
    DEMAIL: 'ECSWANDC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 84,
    CERTIFIED: '2002-03-23 00:00:00',
    TOOLTIP: 'EMPOWERMENT CONGRESS SOUTHWEST AREA NDC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=84',
    SERVICE_RE: 'REGION 9 - SOUTH LA 2',
  },
  {
    OBJECTID: 23,
    NAME: 'EMPOWERMENT CONGRESS WEST AREA NDC',
    WADDRESS: 'http://www.ecwandc.org/',
    DWEBSITE: 'http://empowerla.org/ECWANDC',
    DEMAIL: 'ECWANDC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 79,
    CERTIFIED: '2002-03-23 00:00:00',
    TOOLTIP: 'EMPOWERMENT CONGRESS WEST AREA NDC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=79',
    SERVICE_RE: 'REGION 10 - SOUTH LA 1',
  },
  {
    OBJECTID: 24,
    NAME: 'ENCINO NC',
    WADDRESS: 'http://www.encinonc.org/',
    DWEBSITE: 'http://empowerla.org/ENC',
    DEMAIL: 'ENC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 18,
    CERTIFIED: '2002-10-08 00:00:00',
    TOOLTIP: 'ENCINO NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=18',
    SERVICE_RE: 'REGION 3 - SOUTH WEST VALLEY',
  },
  {
    OBJECTID: 25,
    NAME: 'FOOTHILL TRAILS DISTRICT NC',
    WADDRESS: 'http://www.ftdnc.org/',
    DWEBSITE: 'http://empowerla.org/FTDNC',
    DEMAIL: 'FTDNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 9,
    CERTIFIED: '2003-03-25 00:00:00',
    TOOLTIP: 'FOOTHILL TRAILS DISTRICT NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=9',
    SERVICE_RE: 'REGION 1 - NORTH EAST VALLEY',
  },
  {
    OBJECTID: 26,
    NAME: 'GLASSELL PARK NC',
    WADDRESS: 'http://glassellparknc.org/',
    DWEBSITE: 'http://empowerla.org/GPNC',
    DEMAIL: 'GPNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 39,
    CERTIFIED: '2002-01-08 00:00:00',
    TOOLTIP: 'GLASSELL PARK NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=39',
    SERVICE_RE: 'REGION 8 - NORTH EAST LA',
  },
  {
    OBJECTID: 27,
    NAME: 'GRANADA HILLS NORTH NC',
    WADDRESS: 'http://ghnnc.org/',
    DWEBSITE: 'http://empowerla.org/GHNNC',
    DEMAIL: 'GHNNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 4,
    CERTIFIED: '2002-09-10 00:00:00',
    TOOLTIP: 'GRANADA HILLS NORTH NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=4',
    SERVICE_RE: 'REGION 2 - NORTH WEST VALLEY',
  },
  {
    OBJECTID: 28,
    NAME: 'GRANADA HILLS SOUTH NC',
    WADDRESS: 'http://ghsnc.org/',
    DWEBSITE: 'http://empowerla.org/GHSNC',
    DEMAIL: 'GHSNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 118,
    CERTIFIED: '2006-01-17 00:00:00',
    TOOLTIP: 'GRANADA HILLS SOUTH NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=118',
    SERVICE_RE: 'REGION 2 - NORTH WEST VALLEY',
  },
  {
    OBJECTID: 29,
    NAME: 'GREATER CYPRESS PARK NC',
    WADDRESS: 'https://www.cypressparknc.com/',
    DWEBSITE: 'https://empowerla.org/gcpnc/',
    DEMAIL: 'GCPNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 102,
    CERTIFIED: '2002-11-19 00:00:00',
    TOOLTIP: 'GREATER CYPRESS PARK NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=102',
    SERVICE_RE: 'REGION 8 - NORTH EAST LA',
  },
  {
    OBJECTID: 30,
    NAME: 'ECHO PARK NC',
    WADDRESS: 'http://gepenc.org/',
    DWEBSITE: 'http://empowerla.org/GEPENC',
    DEMAIL: 'GEPENC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 44,
    CERTIFIED: '2002-04-16 00:00:00',
    TOOLTIP: 'ECHO PARK NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=44',
    SERVICE_RE: 'REGION 7 - EAST',
  },
  {
    OBJECTID: 31,
    NAME: 'GREATER TOLUCA LAKE NC',
    WADDRESS: 'http://www.gtlnc.org/',
    DWEBSITE: 'http://empowerla.org/GTLNC',
    DEMAIL: 'GTLNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 28,
    CERTIFIED: '2002-09-10 00:00:00',
    TOOLTIP: 'GREATER TOLUCA LAKE NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=28',
    SERVICE_RE: 'REGION 4 - SOUTH EAST VALLEY',
  },
  {
    OBJECTID: 32,
    NAME: 'GREATER VALLEY GLEN',
    WADDRESS: 'http://greatervalleyglencouncil.org/',
    DWEBSITE: 'http://empowerla.org/GVGC',
    DEMAIL: 'GVGC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 21,
    CERTIFIED: '2002-08-27 00:00:00',
    TOOLTIP: 'GREATER VALLEY GLEN',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=21',
    SERVICE_RE: 'REGION 4 - SOUTH EAST VALLEY',
  },
  {
    OBJECTID: 33,
    NAME: 'GREATER WILSHIRE NC',
    WADDRESS: 'http://www.greaterwilshire.org/',
    DWEBSITE: 'http://empowerla.org/GWNC',
    DEMAIL: 'GWNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 119,
    CERTIFIED: '2003-12-02 00:00:00',
    TOOLTIP: 'GREATER WILSHIRE NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=119',
    SERVICE_RE: 'REGION 5 - CENTRAL 1',
  },
  {
    OBJECTID: 34,
    NAME: 'HARBOR CITY NC',
    WADDRESS: 'http://www.harborcitync.com/index.html',
    DWEBSITE: 'http://empowerla.org/HARBORCITYNC',
    DEMAIL: 'HarborCityNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 92,
    CERTIFIED: '2002-03-26 00:00:00',
    TOOLTIP: 'HARBOR CITY NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=92',
    SERVICE_RE: 'REGION 12 - HARBOR',
  },
  {
    OBJECTID: 35,
    NAME: 'HARBOR GATEWAY NORTH NC',
    WADDRESS: 'http://www.harborgatewaynorth.org/',
    DWEBSITE: 'http://empowerla.org/HGNNC',
    DEMAIL: 'HGNNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 90,
    CERTIFIED: '2002-11-12 00:00:00',
    TOOLTIP: 'HARBOR GATEWAY NORTH NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=90',
    SERVICE_RE: 'REGION 12 - HARBOR',
  },
  {
    OBJECTID: 36,
    NAME: 'HARBOR GATEWAY SOUTH NC',
    WADDRESS: 'http://www.harborgatewaysouth.org/',
    DWEBSITE: 'http://empowerla.org/HGSNC',
    DEMAIL: 'HGSNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 91,
    CERTIFIED: '2003-04-08 00:00:00',
    TOOLTIP: 'HARBOR GATEWAY SOUTH NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=91',
    SERVICE_RE: 'REGION 12 - HARBOR',
  },
  {
    OBJECTID: 37,
    NAME: 'HERMON NC',
    WADDRESS: 'https:/www./hermonnc.org/',
    DWEBSITE: 'http://empowerla.org/hnc/',
    DEMAIL: 'NULL',
    DPHONE: 'NULL',
    NC_ID: 126,
    CERTIFIED: '2017-05-25 00:00:00',
    TOOLTIP: 'HERMON NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=126',
    SERVICE_RE: 'REGION 8 - NORTH EAST LA',
  },
  {
    OBJECTID: 38,
    NAME: 'HISTORIC CULTURAL NORTH NC',
    WADDRESS: 'http://empowerla.org/HCNNC',
    DWEBSITE: 'http://empowerla.org/HCNNC',
    DEMAIL: 'HCNNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 128,
    CERTIFIED: '2018-10-29 00:00:00',
    TOOLTIP: 'HISTORIC CULTURAL NORTH NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=128',
    SERVICE_RE: 'REGION 6 - CENTRAL 2',
  },
  {
    OBJECTID: 39,
    NAME: 'HISTORIC HIGHLAND PARK NC',
    WADDRESS: 'http://highlandparknc.com/',
    DWEBSITE: 'http://empowerla.org/HHPNC',
    DEMAIL: 'HHPNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 41,
    CERTIFIED: '2002-05-28 00:00:00',
    TOOLTIP: 'HISTORIC HIGHLAND PARK NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=41',
    SERVICE_RE: 'REGION 8 - NORTH EAST LA',
  },
  {
    OBJECTID: 40,
    NAME: 'HOLLYWOOD HILLS WEST NC',
    WADDRESS: 'http://www.hhwnc.org/',
    DWEBSITE: 'http://empowerla.org/HHWNC',
    DEMAIL: 'HHWNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 29,
    CERTIFIED: '2002-05-07 00:00:00',
    TOOLTIP: 'HOLLYWOOD HILLS WEST NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=29',
    SERVICE_RE: 'REGION 5 - CENTRAL 1',
  },
  {
    OBJECTID: 41,
    NAME: 'HOLLYWOOD STUDIO DISTRICT NC',
    WADDRESS: 'http://hsdnc.org/',
    DWEBSITE: 'http://empowerla.org/HSDNC',
    DEMAIL: 'HSDNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 33,
    CERTIFIED: '2005-11-01 00:00:00',
    TOOLTIP: 'HOLLYWOOD STUDIO DISTRICT NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=33',
    SERVICE_RE: 'REGION 5 - CENTRAL 1',
  },
  {
    OBJECTID: 42,
    NAME: 'HOLLYWOOD UNITED NC',
    WADDRESS: 'http://www.hollywoodunitednc.org/',
    DWEBSITE: 'http://empowerla.org/HUNC',
    DEMAIL: 'HUNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 30,
    CERTIFIED: '2002-10-15 00:00:00',
    TOOLTIP: 'HOLLYWOOD UNITED NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=30',
    SERVICE_RE: 'REGION 5 - CENTRAL 1',
  },
  {
    OBJECTID: 43,
    NAME: 'LA-32 NC',
    WADDRESS: 'http://www.la32nc.org/',
    DWEBSITE: 'http://empowerla.org/LA32',
    DEMAIL: 'LA32NC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 48,
    CERTIFIED: '2002-05-21 00:00:00',
    TOOLTIP: 'LA-32 NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=48',
    SERVICE_RE: 'REGION 8 - NORTH EAST LA',
  },
  {
    OBJECTID: 44,
    NAME: 'LAKE BALBOA NC',
    WADDRESS: 'http://lakebalboanc.org/',
    DWEBSITE: 'http://empowerla.org/LBNC',
    DEMAIL: 'LBNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 19,
    CERTIFIED: '2004-09-09 00:00:00',
    TOOLTIP: 'LAKE BALBOA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=19',
    SERVICE_RE: 'REGION 3 - SOUTH WEST VALLEY',
  },
  {
    OBJECTID: 45,
    NAME: 'LINCOLN HEIGHTS NC',
    WADDRESS: 'http://www.lincolnheightsnc.org/',
    DWEBSITE: 'http://empowerla.org/LHNC',
    DEMAIL: 'LHNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 47,
    CERTIFIED: '2002-04-27 00:00:00',
    TOOLTIP: 'LINCOLN HEIGHTS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=47',
    SERVICE_RE: 'REGION 8 - NORTH EAST LA',
  },
  {
    OBJECTID: 46,
    NAME: 'LOS FELIZ NC',
    WADDRESS: 'http://www.losfeliznc.org/',
    DWEBSITE: 'http://empowerla.org/LFNC',
    DEMAIL: 'LFNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 36,
    CERTIFIED: '2002-06-11 00:00:00',
    TOOLTIP: 'LOS FELIZ NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=36',
    SERVICE_RE: 'REGION 7 - EAST',
  },
  {
    OBJECTID: 47,
    NAME: 'MACARTHUR PARK NC',
    WADDRESS: 'http://macarthurparknc.org/',
    DWEBSITE: 'http://empowerla.org/MPNC',
    DEMAIL: 'MPNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 54,
    CERTIFIED: '2003-06-03 00:00:00',
    TOOLTIP: 'MACARTHUR PARK NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=54',
    SERVICE_RE: 'REGION 6 - CENTRAL 2',
  },
  {
    OBJECTID: 48,
    NAME: 'MAR VISTA NC',
    WADDRESS: 'http://marvistacc.org/',
    DWEBSITE: 'http://empowerla.org/MVCC',
    DEMAIL: 'MVCC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 67,
    CERTIFIED: '2002-08-13 00:00:00',
    TOOLTIP: 'MAR VISTA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=67',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 49,
    NAME: 'NOHO NC',
    WADDRESS: 'http://www.midtownnoho.org/',
    DWEBSITE: 'http://empowerla.org/NOHONC',
    DEMAIL: 'MTNHNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 24,
    CERTIFIED: '2002-09-24 00:00:00',
    TOOLTIP: 'NOHO NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=24',
    SERVICE_RE: 'REGION 4 - SOUTH EAST VALLEY',
  },
  {
    OBJECTID: 50,
    NAME: 'MID CITY NC',
    WADDRESS: 'http://mincla.org/',
    DWEBSITE: 'http://empowerla.org/MINC',
    DEMAIL: 'MINC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 73,
    CERTIFIED: '2002-02-19 00:00:00',
    TOOLTIP: 'MID CITY NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=73',
    SERVICE_RE: 'REGION 10 - SOUTH LA 1',
  },
  {
    OBJECTID: 51,
    NAME: 'MID CITY WEST CC',
    WADDRESS: 'http://www.midcitywest.org/',
    DWEBSITE: 'http://empowerla.org/MCWCC',
    DEMAIL: 'MCWCC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 58,
    CERTIFIED: '2002-06-25 00:00:00',
    TOOLTIP: 'MID CITY WEST CC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=58',
    SERVICE_RE: 'REGION 5 - CENTRAL 1',
  },
  {
    OBJECTID: 52,
    NAME: 'MISSION HILLS NC',
    WADDRESS: 'http://mhnconline.org/',
    DWEBSITE: 'http://empowerla.org/MHNC',
    DEMAIL: 'MHNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 101,
    CERTIFIED: '2005-04-19 00:00:00',
    TOOLTIP: 'MISSION HILLS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=101',
    SERVICE_RE: 'REGION 1 - NORTH EAST VALLEY',
  },
  {
    OBJECTID: 53,
    NAME: 'NC VALLEY VILLAGE',
    WADDRESS: 'http://www.myvalleyvillage.com/',
    DWEBSITE: 'http://empowerla.org/NCVV',
    DEMAIL: 'NCVV@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 25,
    CERTIFIED: '2002-09-10 00:00:00',
    TOOLTIP: 'NC VALLEY VILLAGE',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=25',
    SERVICE_RE: 'REGION 4 - SOUTH EAST VALLEY',
  },
  {
    OBJECTID: 54,
    NAME: 'NOHO WEST NC',
    WADDRESS: 'http://nohowest.org/',
    DWEBSITE: 'http://empowerla.org/NOHOWESTNC',
    DEMAIL: 'NoHoWestNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 22,
    CERTIFIED: '2011-01-11 00:00:00',
    TOOLTIP: 'NOHO WEST NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=22',
    SERVICE_RE: 'REGION 4 - SOUTH EAST VALLEY',
  },
  {
    OBJECTID: 55,
    NAME: 'NORTH HILLS EAST NC',
    WADDRESS: 'http://www.northhillseastnc.org/',
    DWEBSITE: 'http://empowerla.org/NHENC',
    DEMAIL: 'NHENC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 112,
    CERTIFIED: '2010-09-14 00:00:00',
    TOOLTIP: 'NORTH HILLS EAST NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=112',
    SERVICE_RE: 'REGION 2 - NORTH WEST VALLEY',
  },
  {
    OBJECTID: 56,
    NAME: 'NORTH HILLS WEST NC',
    WADDRESS: 'http://www.nhwnc.net/',
    DWEBSITE: 'http://empowerla.org/NHWNC',
    DEMAIL: 'NHWNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 111,
    CERTIFIED: '2003-02-25 00:00:00',
    TOOLTIP: 'NORTH HILLS WEST NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=111',
    SERVICE_RE: 'REGION 1 - NORTH EAST VALLEY',
  },
  {
    OBJECTID: 57,
    NAME: 'NORTH HOLLYWOOD NORTH EAST NC',
    WADDRESS: 'http://www.nhnenc.org/',
    DWEBSITE: 'http://empowerla.org/NHNENC',
    DEMAIL: 'NHNENC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 23,
    CERTIFIED: '2002-09-24 00:00:00',
    TOOLTIP: 'NORTH HOLLYWOOD NORTH EAST NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=23',
    SERVICE_RE: 'REGION 4 - SOUTH EAST VALLEY',
  },
  {
    OBJECTID: 58,
    NAME: 'NORTH WESTWOOD NC',
    WADDRESS: 'https://empowerla.org/nwwnc/',
    DWEBSITE: 'https://empowerla.org/nwwnc/',
    DEMAIL: 'NWWNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 127,
    CERTIFIED: '2010-01-19 00:00:00',
    TOOLTIP: 'NORTH WESTWOOD NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=127',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 59,
    NAME: 'NORTHRIDGE EAST NC',
    WADDRESS: 'http://nenc-la.org/',
    DWEBSITE: 'http://empowerla.org/NENC',
    DEMAIL: 'NENC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 120,
    CERTIFIED: '2004-11-30 00:00:00',
    TOOLTIP: 'NORTHRIDGE EAST NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=120',
    SERVICE_RE: 'REGION 2 - NORTH WEST VALLEY',
  },
  {
    OBJECTID: 60,
    NAME: 'NORTHRIDGE SOUTH NC',
    WADDRESS: 'http://www.northridgesouth.org/',
    DWEBSITE: 'http://empowerla.org/NSNC',
    DEMAIL: 'NSNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 124,
    CERTIFIED: '2010-05-04 00:00:00',
    TOOLTIP: 'NORTHRIDGE SOUTH NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=124',
    SERVICE_RE: 'REGION 2 - NORTH WEST VALLEY',
  },
  {
    OBJECTID: 61,
    NAME: 'NORTHRIDGE WEST NC',
    WADDRESS: 'http://www.northridgewest.org/',
    DWEBSITE: 'http://empowerla.org/NWNC',
    DEMAIL: 'NWNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 113,
    CERTIFIED: '2004-10-26 00:00:00',
    TOOLTIP: 'NORTHRIDGE WEST NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=113',
    SERVICE_RE: 'REGION 2 - NORTH WEST VALLEY',
  },
  {
    OBJECTID: 62,
    NAME: 'NORTHWEST SAN PEDRO NC',
    WADDRESS: 'http://www.nwsanpedro.org/',
    DWEBSITE: 'http://empowerla.org/NWSPNC',
    DEMAIL: 'NWSPNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 94,
    CERTIFIED: '2002-02-12 00:00:00',
    TOOLTIP: 'NORTHWEST SAN PEDRO NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=94',
    SERVICE_RE: 'REGION 12 - HARBOR',
  },
  {
    OBJECTID: 63,
    NAME: 'OLYMPIC PARK NC',
    WADDRESS: 'http://opnc.org/',
    DWEBSITE: 'http://empowerla.org/OPNC',
    DEMAIL: 'OPNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 104,
    CERTIFIED: '2003-12-02 00:00:00',
    TOOLTIP: 'OLYMPIC PARK NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=104',
    SERVICE_RE: 'REGION 6 - CENTRAL 2',
  },
  {
    OBJECTID: 64,
    NAME: 'P.I.C.O. NC',
    WADDRESS: 'http://piconc.com/',
    DWEBSITE: 'http://empowerla.org/PICO',
    DEMAIL: 'PICO@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 60,
    CERTIFIED: '2002-03-12 00:00:00',
    TOOLTIP: 'P.I.C.O. NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=60',
    SERVICE_RE: 'REGION 5 - CENTRAL 1',
  },
  {
    OBJECTID: 65,
    NAME: 'PACOIMA NC',
    WADDRESS: 'http://pacoimanc.com/',
    DWEBSITE: 'http://empowerla.org/PNC',
    DEMAIL: 'PNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 7,
    CERTIFIED: '2002-03-07 00:00:00',
    TOOLTIP: 'PACOIMA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=7',
    SERVICE_RE: 'REGION 1 - NORTH EAST VALLEY',
  },
  {
    OBJECTID: 66,
    NAME: 'PALMS NC',
    WADDRESS: 'http://palmsla.org/',
    DWEBSITE: 'http://empowerla.org/PALMSNC',
    DEMAIL: 'PalmsNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 115,
    CERTIFIED: '2004-12-14 00:00:00',
    TOOLTIP: 'PALMS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=115',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 67,
    NAME: 'PANORAMA CITY NC',
    WADDRESS: 'http://www.panoramacitync.org/',
    DWEBSITE: 'http://empowerla.org/PCNC',
    DEMAIL: 'PCNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 100,
    CERTIFIED: '2007-03-15 00:00:00',
    TOOLTIP: 'PANORAMA CITY NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=100',
    SERVICE_RE: 'REGION 1 - NORTH EAST VALLEY',
  },
  {
    OBJECTID: 68,
    NAME: 'PARK MESA HEIGHTS NC',
    WADDRESS: 'http://www.pmhcc90043.org/Home.html',
    DWEBSITE: 'http://empowerla.org/PMHCC',
    DEMAIL: 'PMHCC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 80,
    CERTIFIED: '2002-03-23 00:00:00',
    TOOLTIP: 'PARK MESA HEIGHTS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=80',
    SERVICE_RE: 'REGION 10 - SOUTH LA 1',
  },
  {
    OBJECTID: 69,
    NAME: 'PICO UNION NC',
    WADDRESS: 'http://www.picounionnc.org/',
    DWEBSITE: 'http://empowerla.org/PUNC',
    DEMAIL: 'PUNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 76,
    CERTIFIED: '2003-06-03 00:00:00',
    TOOLTIP: 'PICO UNION NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=76',
    SERVICE_RE: 'REGION 6 - CENTRAL 2',
  },
  {
    OBJECTID: 70,
    NAME: 'PORTER RANCH NC',
    WADDRESS: 'http://www.prnc.org/',
    DWEBSITE: 'http://empowerla.org/PRNC',
    DEMAIL: 'PRNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 114,
    CERTIFIED: '2003-07-01 00:00:00',
    TOOLTIP: 'PORTER RANCH NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=114',
    SERVICE_RE: 'REGION 2 - NORTH WEST VALLEY',
  },
  {
    OBJECTID: 71,
    NAME: 'RAMPART VILLAGE NC',
    WADDRESS: 'http://www.rvnc.org/',
    DWEBSITE: 'http://empowerla.org/RVNC',
    DEMAIL: 'RVNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 53,
    CERTIFIED: '2007-03-05 00:00:00',
    TOOLTIP: 'RAMPART VILLAGE NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=53',
    SERVICE_RE: 'REGION 7 - EAST',
  },
  {
    OBJECTID: 72,
    NAME: 'RESEDA NC',
    WADDRESS: 'http://www.resedacouncil.org/',
    DWEBSITE: 'http://empowerla.org/RNC',
    DEMAIL: 'RNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 15,
    CERTIFIED: '2002-10-08 00:00:00',
    TOOLTIP: 'RESEDA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=15',
    SERVICE_RE: 'REGION 3 - SOUTH WEST VALLEY',
  },
  {
    OBJECTID: 73,
    NAME: 'SHERMAN OAKS NC',
    WADDRESS: 'http://www.shermanoaksnc.org/',
    DWEBSITE: 'http://empowerla.org/SONC',
    DEMAIL: 'SONC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 26,
    CERTIFIED: '2002-10-29 00:00:00',
    TOOLTIP: 'SHERMAN OAKS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=26',
    SERVICE_RE: 'REGION 4 - SOUTH EAST VALLEY',
  },
  {
    OBJECTID: 74,
    NAME: 'SILVER LAKE NC',
    WADDRESS: 'http://silverlakenc.org/',
    DWEBSITE: 'http://empowerla.org/SLNC',
    DEMAIL: 'SLNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 38,
    CERTIFIED: '2003-02-11 00:00:00',
    TOOLTIP: 'SILVER LAKE NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=38',
    SERVICE_RE: 'REGION 7 - EAST',
  },
  {
    OBJECTID: 75,
    NAME: 'SOUTH ROBERTSON NC',
    WADDRESS: 'http://www.soronc.org/',
    DWEBSITE: 'http://empowerla.org/SORONC',
    DEMAIL: 'SORONC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 61,
    CERTIFIED: '2002-08-13 00:00:00',
    TOOLTIP: 'SOUTH ROBERTSON NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=61',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 76,
    NAME: 'SOUTH CENTRAL NC',
    WADDRESS: 'https://www.southcentralnc.org/',
    DWEBSITE: 'https://empowerla.org/southcentralnc/',
    DEMAIL: 'SouthCentralNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 78,
    CERTIFIED: '2003-06-24 00:00:00',
    TOOLTIP: 'SOUTH CENTRAL NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=78',
    SERVICE_RE: 'REGION 9 - SOUTH LA 2',
  },
  {
    OBJECTID: 77,
    NAME: 'STUDIO CITY NC',
    WADDRESS: 'http://studiocitync.org/',
    DWEBSITE: 'http://empowerla.org/SCNC',
    DEMAIL: 'SCNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 27,
    CERTIFIED: '2002-10-29 00:00:00',
    TOOLTIP: 'STUDIO CITY NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=27',
    SERVICE_RE: 'REGION 4 - SOUTH EAST VALLEY',
  },
  {
    OBJECTID: 78,
    NAME: 'SUN VALLEY AREA NC',
    WADDRESS: 'http://svanc.org/',
    DWEBSITE: 'http://empowerla.org/SVANC',
    DEMAIL: 'SVANC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 8,
    CERTIFIED: '2002-05-07 00:00:00',
    TOOLTIP: 'SUN VALLEY AREA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=8',
    SERVICE_RE: 'REGION 1 - NORTH EAST VALLEY',
  },
  {
    OBJECTID: 79,
    NAME: 'SUNLAND-TUJUNGA NC',
    WADDRESS: 'http://stnc.org/',
    DWEBSITE: 'http://empowerla.org/STNC',
    DEMAIL: 'STNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 10,
    CERTIFIED: '2003-05-27 00:00:00',
    TOOLTIP: 'SUNLAND-TUJUNGA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=10',
    SERVICE_RE: 'REGION 1 - NORTH EAST VALLEY',
  },
  {
    OBJECTID: 80,
    NAME: 'SYLMAR NC',
    WADDRESS: 'http://www.sylmarneighborhoodcouncil.org/',
    DWEBSITE: 'http://empowerla.org/SNC',
    DEMAIL: 'SNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 5,
    CERTIFIED: '2003-05-06 00:00:00',
    TOOLTIP: 'SYLMAR NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=5',
    SERVICE_RE: 'REGION 1 - NORTH EAST VALLEY',
  },
  {
    OBJECTID: 81,
    NAME: 'TARZANA NC',
    WADDRESS: 'http://www.tarzananc.org/',
    DWEBSITE: 'http://empowerla.org/TNC',
    DEMAIL: 'TNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 17,
    CERTIFIED: '2003-01-14 00:00:00',
    TOOLTIP: 'TARZANA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=17',
    SERVICE_RE: 'REGION 3 - SOUTH WEST VALLEY',
  },
  {
    OBJECTID: 82,
    NAME: 'UNITED NEIGHBORHOODS NC',
    WADDRESS: 'http://www.unnc.org/index.html',
    DWEBSITE: 'http://empowerla.org/UNNC',
    DEMAIL: 'UNNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 74,
    CERTIFIED: '2002-05-14 00:00:00',
    TOOLTIP: 'UNITED NEIGHBORHOODS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=74',
    SERVICE_RE: 'REGION 10 - SOUTH LA 1',
  },
  {
    OBJECTID: 83,
    NAME: 'VAN NUYS NC',
    WADDRESS: 'http://www.vnnc.org/',
    DWEBSITE: 'http://empowerla.org/VNNC',
    DEMAIL: 'VNNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 20,
    CERTIFIED: '2002-07-23 00:00:00',
    TOOLTIP: 'VAN NUYS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=20',
    SERVICE_RE: 'REGION 4 - SOUTH EAST VALLEY',
  },
  {
    OBJECTID: 84,
    NAME: 'VENICE NC',
    WADDRESS: 'http://www.venicenc.org/',
    DWEBSITE: 'http://empowerla.org/VNC',
    DEMAIL: 'VeniceNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 68,
    CERTIFIED: '2002-03-12 00:00:00',
    TOOLTIP: 'VENICE NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=68',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 85,
    NAME: 'VOICES NC',
    WADDRESS: 'https://www.voicesnc.org',
    DWEBSITE: 'https://empowerla.org/voicesof90037/',
    DEMAIL: 'V9NC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 109,
    CERTIFIED: '2008-06-16 00:00:00',
    TOOLTIP: 'VOICES NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=109',
    SERVICE_RE: 'REGION 9 - SOUTH LA 2',
  },
  {
    OBJECTID: 86,
    NAME: 'WATTS NC',
    WADDRESS: 'http://thewattsnc.com/',
    DWEBSITE: 'http://empowerla.org/WATTS',
    DEMAIL: 'WattsNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 88,
    CERTIFIED: '2002-12-03 00:00:00',
    TOOLTIP: 'WATTS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=88',
    SERVICE_RE: 'REGION 9 - SOUTH LA 2',
  },
  {
    OBJECTID: 87,
    NAME: 'WEST ADAMS NC',
    WADDRESS: 'http://www.westadamsnc.org/',
    DWEBSITE: 'http://empowerla.org/WANC',
    DEMAIL: 'WANC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 75,
    CERTIFIED: '2002-02-19 00:00:00',
    TOOLTIP: 'WEST ADAMS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=75',
    SERVICE_RE: 'REGION 10 - SOUTH LA 1',
  },
  {
    OBJECTID: 88,
    NAME: 'WEST HILLS NC',
    WADDRESS: 'http://www.westhillsnc.org/',
    DWEBSITE: 'http://empowerla.org/WHNC',
    DEMAIL: 'WHNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 11,
    CERTIFIED: '2002-01-22 00:00:00',
    TOOLTIP: 'WEST HILLS NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=11',
    SERVICE_RE: 'REGION 3 - SOUTH WEST VALLEY',
  },
  {
    OBJECTID: 89,
    NAME: 'WEST LOS ANGELES SAWTELLE NC',
    WADDRESS: 'http://www.wlanc.com/',
    DWEBSITE: 'http://empowerla.org/WLANC',
    DEMAIL: 'WLANC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 66,
    CERTIFIED: '2003-10-07 00:00:00',
    TOOLTIP: 'WEST LOS ANGELES SAWTELLE NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=66',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 90,
    NAME: 'WESTCHESTER/PLAYA NC',
    WADDRESS: 'http://www.ncwpdr.org/',
    DWEBSITE: 'http://empowerla.org/NCWP',
    DEMAIL: 'NCWP@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 71,
    CERTIFIED: '2002-03-12 00:00:00',
    TOOLTIP: 'WESTCHESTER/PLAYA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=71',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 91,
    NAME: 'WESTLAKE NORTH NC',
    WADDRESS: 'https://www.westlakenorthnc.org',
    DWEBSITE: 'https://empowerla.org/wnnc/',
    DEMAIL: 'WNNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 97,
    CERTIFIED: '2011-06-07 00:00:00',
    TOOLTIP: 'WESTLAKE NORTH NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=97',
    SERVICE_RE: 'REGION 6 - CENTRAL 2',
  },
  {
    OBJECTID: 92,
    NAME: 'WESTLAKE SOUTH NC',
    WADDRESS: 'https://www.wsncla.org',
    DWEBSITE: 'https://empowerla.org/wsnc/',
    DEMAIL: 'WSNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 121,
    CERTIFIED: '2011-06-07 00:00:00',
    TOOLTIP: 'WESTLAKE SOUTH NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=121',
    SERVICE_RE: 'REGION 6 - CENTRAL 2',
  },
  {
    OBJECTID: 93,
    NAME: 'WESTSIDE NC',
    WADDRESS: 'http://www.wncla.org/',
    DWEBSITE: 'http://empowerla.org/WNC',
    DEMAIL: 'WNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 62,
    CERTIFIED: '2002-06-04 00:00:00',
    TOOLTIP: 'WESTSIDE NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=62',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 94,
    NAME: 'WESTWOOD NC',
    WADDRESS: 'http://www.wwnc.org/',
    DWEBSITE: 'http://empowerla.org/WWNC',
    DEMAIL: 'WWNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 63,
    CERTIFIED: '2010-01-19 00:00:00',
    TOOLTIP: 'WESTWOOD NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=63',
    SERVICE_RE: 'REGION 11 - WEST LA',
  },
  {
    OBJECTID: 95,
    NAME: 'WILMINGTON NC',
    WADDRESS: 'http://www.wilmingtonneighborhoodcouncil.com/',
    DWEBSITE: 'http://empowerla.org/WILMINGTON',
    DEMAIL: 'WilmingtonNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 93,
    CERTIFIED: '2001-12-11 00:00:00',
    TOOLTIP: 'WILMINGTON NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=93',
    SERVICE_RE: 'REGION 12 - HARBOR',
  },
  {
    OBJECTID: 96,
    NAME: 'WILSHIRE CENTER - KOREATOWN NC',
    WADDRESS: 'http://wcknc.org/',
    DWEBSITE: 'http://empowerla.org/WCKNC',
    DEMAIL: 'WCKNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 55,
    CERTIFIED: '2003-08-05 00:00:00',
    TOOLTIP: 'WILSHIRE CENTER - KOREATOWN NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=55',
    SERVICE_RE: 'REGION 6 - CENTRAL 2',
  },
  {
    OBJECTID: 97,
    NAME: 'WINNETKA NC',
    WADDRESS: 'http://www.winnetkanc.com/',
    DWEBSITE: 'http://empowerla.org/WINNETKA',
    DEMAIL: 'WinnetkaNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 14,
    CERTIFIED: '2003-07-22 00:00:00',
    TOOLTIP: 'WINNETKA NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=14',
    SERVICE_RE: 'REGION 3 - SOUTH WEST VALLEY',
  },
  {
    OBJECTID: 98,
    NAME: 'WOODLAND HILLS-WARNER CENTER NC',
    WADDRESS: 'http://www.whcouncil.org/index.php',
    DWEBSITE: 'http://empowerla.org/WHWCNC',
    DEMAIL: 'WHWCNC@EmpowerLA.org',
    DPHONE: '213-978-1551',
    NC_ID: 16,
    CERTIFIED: '2002-03-06 00:00:00',
    TOOLTIP: 'WOODLAND HILLS-WARNER CENTER NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=16',
    SERVICE_RE: 'REGION 3 - SOUTH WEST VALLEY',
  },
  {
    OBJECTID: 99,
    NAME: 'ZAPATA-KING NC',
    WADDRESS: 'http://www.zapatakingnc.org/',
    DWEBSITE: 'http://empowerla.org/ZKNC',
    DEMAIL: ' ',
    DPHONE: '213-978-1551',
    NC_ID: 125,
    CERTIFIED: '2015-02-03 00:00:00',
    TOOLTIP: 'ZAPATA-KING NC',
    NLA_URL: 'navigatela/reports/nc_reports.cfm?id=125',
    SERVICE_RE: 'REGION 9 - SOUTH LA 2',
  },
];

export default councils;
