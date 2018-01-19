import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'react-native-qrcode-svg';

import { ScreenWrapper, Button, Heading, CenterView, TextInput } from '../../../common/components';

export default class ExportWallet extends Component {
  static propTypes = {
    mnemonic: PropTypes.string.isRequired,
    exported: PropTypes.string,
    exportWallet: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    const { mnemonic, exported, exportWallet, isLoading } = this.props;

    return (
      <ScreenWrapper>
        <Heading>Backup Wallet</Heading>

        <TextInput label="Mnemonic" value={mnemonic} />

        <CenterView>
          <QRCode value={mnemonic} />
        </CenterView>

        <Heading notFirst>Export Wallet</Heading>

        <Button
          onPress={() => exportWallet()}
          title="Export Wallet"
          type="primary"
          size="lg"
          disabled={isLoading}
        />

        {exported && <TextInput label="Wallet.dat" value={exported} multiline />}
      </ScreenWrapper>
    );
  }
}
