cube(`Users`, {
  sql: `SELECT * FROM news.users`,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [currentname, currentprovider, githubJsonCreatedAt, githubJsonGravatarId, githubJsonName, githubJsonNodeId, githubJsonUpdatedAt, githubDisplayname, githubId, githubProvider, githubUsername, localId, localProvider, microsoftJsonDisplayname, microsoftJsonGivenname, microsoftJsonId, microsoftJsonJobtitle, microsoftJsonSurname, microsoftJsonUserprincipalname, microsoftDisplayname, microsoftId, microsoftNameFamilyname, microsoftNameGivenname, microsoftProvider, firstdate]
    },
  },

  dimensions: {
    id: {
      sql: `${CUBE}.\`_id\``,
      type: `string`,
      title: 'ID',
      primaryKey: true,
    },
    githubJsonType: {
      sql: `${CUBE}.\`github._json.type\``,
      type: `string`,
      title: `Github. Json.type`
    },

    githubJsonStarredUrl: {
      sql: `${CUBE}.\`github._json.starred_url\``,
      type: `string`,
      title: `Github. Json.starred Url`
    },

    currentname: {
      sql: `${CUBE}.\`currentName\``,
      type: `string`
    },

    currentprovider: {
      sql: `${CUBE}.\`currentProvider\``,
      type: `string`
    },

    firstapp: {
      sql: `${CUBE}.\`firstApp\``,
      type: `string`
    },

    githubJsonAvatarUrl: {
      sql: `${CUBE}.\`github._json.avatar_url\``,
      type: `string`,
      title: `Github. Json.avatar Url`
    },

    githubJsonBio: {
      sql: `${CUBE}.\`github._json.bio\``,
      type: `string`,
      title: `Github. Json.bio`
    },

    githubJsonBlog: {
      sql: `${CUBE}.\`github._json.blog\``,
      type: `string`,
      title: `Github. Json.blog`
    },

    githubJsonCompany: {
      sql: `${CUBE}.\`github._json.company\``,
      type: `string`,
      title: `Github. Json.company`
    },

    githubJsonCreatedAt: {
      sql: `${CUBE}.\`github._json.created_at\``,
      type: `string`,
      title: `Github. Json.created at`
    },

    githubJsonEmail: {
      sql: `${CUBE}.\`github._json.email\``,
      type: `string`,
      title: `Github. Json.email`
    },

    githubJsonEventsUrl: {
      sql: `${CUBE}.\`github._json.events_url\``,
      type: `string`,
      title: `Github. Json.events Url`
    },

    githubJsonFollowersUrl: {
      sql: `${CUBE}.\`github._json.followers_url\``,
      type: `string`,
      title: `Github. Json.followers Url`
    },

    githubJsonFollowingUrl: {
      sql: `${CUBE}.\`github._json.following_url\``,
      type: `string`,
      title: `Github. Json.following Url`
    },

    githubJsonGistsUrl: {
      sql: `${CUBE}.\`github._json.gists_url\``,
      type: `string`,
      title: `Github. Json.gists Url`
    },

    githubJsonGravatarId: {
      sql: `${CUBE}.\`github._json.gravatar_id\``,
      type: `string`,
      title: `Github. Json.gravatar Id`
    },

    githubJsonHireable: {
      sql: `${CUBE}.\`github._json.hireable\``,
      type: `string`,
      title: `Github. Json.hireable`
    },

    githubJsonHtmlUrl: {
      sql: `${CUBE}.\`github._json.html_url\``,
      type: `string`,
      title: `Github. Json.html Url`
    },

    githubJsonLocation: {
      sql: `${CUBE}.\`github._json.location\``,
      type: `string`,
      title: `Github. Json.location`
    },

    githubJsonLogin: {
      sql: `${CUBE}.\`github._json.login\``,
      type: `string`,
      title: `Github. Json.login`
    },

    githubJsonName: {
      sql: `${CUBE}.\`github._json.name\``,
      type: `string`,
      title: `Github. Json.name`
    },

    githubJsonNodeId: {
      sql: `${CUBE}.\`github._json.node_id\``,
      type: `string`,
      title: `Github. Json.node Id`
    },

    githubJsonOrganizationsUrl: {
      sql: `${CUBE}.\`github._json.organizations_url\``,
      type: `string`,
      title: `Github. Json.organizations Url`
    },

    githubJsonReceivedEventsUrl: {
      sql: `${CUBE}.\`github._json.received_events_url\``,
      type: `string`,
      title: `Github. Json.received Events Url`
    },

    githubJsonReposUrl: {
      sql: `${CUBE}.\`github._json.repos_url\``,
      type: `string`,
      title: `Github. Json.repos Url`
    },

    githubJsonSubscriptionsUrl: {
      sql: `${CUBE}.\`github._json.subscriptions_url\``,
      type: `string`,
      title: `Github. Json.subscriptions Url`
    },

    githubJsonUpdatedAt: {
      sql: `${CUBE}.\`github._json.updated_at\``,
      type: `string`,
      title: `Github. Json.updated at`
    },

    githubJsonUrl: {
      sql: `${CUBE}.\`github._json.url\``,
      type: `string`,
      title: `Github. Json.url`
    },

    githubRaw: {
      sql: `${CUBE}.\`github._raw\``,
      type: `string`,
      title: `Github. Raw`
    },

    githubDisplayname: {
      sql: `${CUBE}.\`github.displayName\``,
      type: `string`,
      title: `Github.displayname`
    },

    githubId: {
      sql: `${CUBE}.\`github.id\``,
      type: `string`,
      title: `Github.id`
    },

    githubProfileurl: {
      sql: `${CUBE}.\`github.profileUrl\``,
      type: `string`,
      title: `Github.profileurl`
    },

    githubProvider: {
      sql: `${CUBE}.\`github.provider\``,
      type: `string`,
      title: `Github.provider`
    },

    githubUsername: {
      sql: `${CUBE}.\`github.username\``,
      type: `string`,
      title: `Github.username`
    },

    localExpired: {
      sql: `${CUBE}.\`local.expired\``,
      type: `string`,
      title: `Local.expired`
    },

    localFirstapp: {
      sql: `${CUBE}.\`local.firstApp\``,
      type: `string`,
      title: `Local.firstapp`
    },

    localHash: {
      sql: `${CUBE}.\`local.hash\``,
      type: `string`,
      title: `Local.hash`
    },

    localId: {
      sql: `${CUBE}.\`local.id\``,
      type: `string`,
      title: `Local.id`
    },

    localProvider: {
      sql: `${CUBE}.\`local.provider\``,
      type: `string`,
      title: `Local.provider`
    },

    localSalt: {
      sql: `${CUBE}.\`local.salt\``,
      type: `string`,
      title: `Local.salt`
    },

    localType: {
      sql: `${CUBE}.\`local.type\``,
      type: `string`,
      title: `Local.type`
    },

    localVerificationcode: {
      sql: `${CUBE}.\`local.verificationCode\``,
      type: `string`,
      title: `Local.verificationcode`
    },

    localVerified: {
      sql: `${CUBE}.\`local.verified\``,
      type: `string`,
      title: `Local.verified`
    },

    microsoftJsonDisplayname: {
      sql: `${CUBE}.\`microsoft._json.displayName\``,
      type: `string`,
      title: `Microsoft. Json.displayname`
    },

    microsoftJsonGivenname: {
      sql: `${CUBE}.\`microsoft._json.givenName\``,
      type: `string`,
      title: `Microsoft. Json.givenname`
    },

    microsoftJsonId: {
      sql: `${CUBE}.\`microsoft._json.id\``,
      type: `string`,
      title: `Microsoft. Json.id`
    },

    microsoftJsonJobtitle: {
      sql: `${CUBE}.\`microsoft._json.jobTitle\``,
      type: `string`,
      title: `Microsoft. Json.jobtitle`
    },

    microsoftJsonMail: {
      sql: `${CUBE}.\`microsoft._json.mail\``,
      type: `string`,
      title: `Microsoft. Json.mail`
    },

    microsoftJsonMobilephone: {
      sql: `${CUBE}.\`microsoft._json.mobilePhone\``,
      type: `string`,
      title: `Microsoft. Json.mobilephone`
    },

    microsoftJsonOfficelocation: {
      sql: `${CUBE}.\`microsoft._json.officeLocation\``,
      type: `string`,
      title: `Microsoft. Json.officelocation`
    },

    microsoftJsonPreferredlanguage: {
      sql: `${CUBE}.\`microsoft._json.preferredLanguage\``,
      type: `string`,
      title: `Microsoft. Json.preferredlanguage`
    },

    microsoftJsonSurname: {
      sql: `${CUBE}.\`microsoft._json.surname\``,
      type: `string`,
      title: `Microsoft. Json.surname`
    },

    microsoftJsonUserprincipalname: {
      sql: `${CUBE}.\`microsoft._json.userPrincipalName\``,
      type: `string`,
      title: `Microsoft. Json.userprincipalname`
    },

    microsoftRaw: {
      sql: `${CUBE}.\`microsoft._raw\``,
      type: `string`,
      title: `Microsoft. Raw`
    },

    microsoftDisplayname: {
      sql: `${CUBE}.\`microsoft.displayName\``,
      type: `string`,
      title: `Microsoft.displayname`
    },

    microsoftId: {
      sql: `${CUBE}.\`microsoft.id\``,
      type: `string`,
      title: `Microsoft.id`
    },

    microsoftNameFamilyname: {
      sql: `${CUBE}.\`microsoft.name.familyName\``,
      type: `string`,
      title: `Microsoft.name.familyname`
    },

    microsoftNameGivenname: {
      sql: `${CUBE}.\`microsoft.name.givenName\``,
      type: `string`,
      title: `Microsoft.name.givenname`
    },

    microsoftProvider: {
      sql: `${CUBE}.\`microsoft.provider\``,
      type: `string`,
      title: `Microsoft.provider`
    },

    firstdate: {
      sql: `${CUBE}.\`firstDate\``,
      type: `time`
    }
  }
});
