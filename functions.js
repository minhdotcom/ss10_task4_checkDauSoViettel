function check_viettel_number (string) {
    var regexp = /^(097|098|032|033)[0-9]{7}$/;
    return regexp.test(string) ? true: false;
}
