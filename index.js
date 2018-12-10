// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, hometown) {
  const matchedDrivers = drivers.filter(function(driver) {
    return driver.hometown === hometown
  })

  logDriverNames(matchedDrivers)
}

function driversByRevenue(drivers) {
  const newDrivers = [...drivers]
  const sorted = newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue
  })
  return sorted
}

function driversByName(drivers) {
  const newDrivers = [...drivers]
  const sorted = newDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
  return sorted
}

function totalRevenue(drivers) {
  const revenueArray = drivers.map(function(driver) {
    return driver.revenue
  })

  function reducer(totalRevenue, revenue) {
    return totalRevenue + revenue
  }

  const totalRevenue = revenueArray.reduce(reducer)

  return totalRevenue
}

function averageRevenue(drivers) {
  const totalRevenueAmount = totalRevenue(drivers)
  const averageRevenue = totalRevenueAmount / drivers.length
  return averageRevenue
}
