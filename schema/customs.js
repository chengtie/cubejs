cube(`Customs`, {
  sql: `SELECT * FROM news.marketplaceleads`,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [country, firstname, lastname, title, offerdisplayname, productid, publisherdisplayname, createdtime, timestamp]
    }
  },

  dimensions: {
    actioncode: {
      sql: `${CUBE}.\`ActionCode\``,
      type: `string`
    },

    country: {
      sql: `${CUBE}.\`CustomerInfo.Country\``,
      type: `string`,
      title: `Country`
    },

    email: {
      sql: `${CUBE}.\`CustomerInfo.Email\``,
      type: `string`,
      title: `Email`
    },

    firstname: {
      sql: `${CUBE}.\`CustomerInfo.FirstName\``,
      type: `string`,
      title: `Firstname`
    },

    lastname: {
      sql: `${CUBE}.\`CustomerInfo.LastName\``,
      type: `string`,
      title: `Lastname`
    },

    phone: {
      sql: `${CUBE}.\`CustomerInfo.Phone\``,
      type: `string`,
      title: `Phone`
    },

    title: {
      sql: `${CUBE}.\`CustomerInfo.Title\``,
      type: `string`,
      title: `Title`
    },

    description: {
      sql: `${CUBE}.\`Description\``,
      type: `string`
    },

    leadsource: {
      sql: `${CUBE}.\`LeadSource\``,
      type: `string`
    },

    offerdisplayname: {
      sql: `${CUBE}.\`OfferDisplayName\``,
      type: `string`
    },

    partitionkey: {
      sql: `${CUBE}.\`PartitionKey\``,
      type: `string`
    },

    productid: {
      sql: `${CUBE}.\`ProductId\``,
      type: `string`
    },

    publisherdisplayname: {
      sql: `${CUBE}.\`PublisherDisplayName\``,
      type: `string`
    },

    rowkey: {
      sql: `${CUBE}.\`RowKey\``,
      type: `string`
    },

    createdtime: {
      sql: `${CUBE}.\`CreatedTime\``,
      type: `time`
    },

    timestamp: {
      sql: `${CUBE}.\`Timestamp\``,
      type: `time`
    }
  }
});
