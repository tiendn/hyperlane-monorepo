import { ethers } from 'ethers';

import {
  ChainMap,
  RouterConfig,
  TokenRouterConfig,
  TokenType,
} from '@hyperlane-xyz/sdk';

import { tokens } from '../../../../../src/config/warp.js';

export const getEthereumInevmUSDCWarpConfig = async (
  routerConfig: ChainMap<RouterConfig>,
): Promise<ChainMap<TokenRouterConfig>> => {
  const ethereum: TokenRouterConfig = {
    ...routerConfig.ethereum,
    type: TokenType.collateral,
    token: tokens.ethereum.USDC,
    hook: '0xb87AC8EA4533AE017604E44470F7c1E550AC6F10', // aggregation of IGP and Merkle, arbitrary config not supported for now, TODO: may want to move to zero address in future
  };

  const inevm: TokenRouterConfig = {
    ...routerConfig.inevm,
    type: TokenType.synthetic,
    interchainSecurityModule: ethers.constants.AddressZero,
  };

  return {
    ethereum,
    inevm,
  };
};