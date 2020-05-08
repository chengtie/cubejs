cube(`Logs`, {
  sql: `SELECT * FROM news.logs`,

  joins: {
    Users: {
      relationship: `belongsTo`,
      sql: `${Logs}.userId = ${Users}._id`
    }
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [ipinfoErrorTitle, userid, date]
    },
  },

  dimensions: {
    id: {
      sql: `${CUBE}.\`_id\``,
      type: "string",
      title: "ID",
      primaryKey: true
    },
    actionThetype: {
      sql: `${CUBE}.\`action.theType\``,
      type: `string`,
      title: `Action.thetype`
    },

    app: {
      sql: `app`,
      type: `string`
    },

    ipinfoErrorMessage: {
      sql: `${CUBE}.\`ipInfo.error.message\``,
      type: `string`,
      title: `Ipinfo.error.message`
    },

    ipinfoErrorTitle: {
      sql: `${CUBE}.\`ipInfo.error.title\``,
      type: `string`,
      title: `Ipinfo.error.title`
    },

    url: {
      sql: `url`,
      type: `string`
    },

    userid: {
      sql: `${CUBE}.\`userId\``,
      type: `string`
    },

    date: {
      sql: `date`,
      type: `time`
    }
  }
});
