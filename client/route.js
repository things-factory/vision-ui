export default function route(page) {
  switch (page) {
    case 'handeye-calib':
      import('./pages/handeye-calib')
      return page
  }
}
