import React, { useContext, useEffect, useState } from 'react';
import { useProtocolDataContext } from './protocol-data-provider';

export enum ConnectionMode {
  normal = 'normal',
  rpc = 'rpc',
}
export const WS_ATTEMPTS_LIMIT = 1;

export interface ConnectionStatusProviderData {
  preferredConnectionMode: ConnectionMode;
  changePreferredConnectionMode: () => void;
  isRPCMandatory: boolean;
  isRPCActive: boolean;
}

const ConnectionStatusDataContext = React.createContext({} as ConnectionStatusProviderData);

export function ConnectionStatusProvider({ children }: React.PropsWithChildren<{}>) {
  const { networkConfig } = useProtocolDataContext();
  const RPC_ONLY_MODE = networkConfig.rpcOnly;
  const [preferredConnectionMode, setPreferredConnectionMode] = useState<ConnectionMode>(
    RPC_ONLY_MODE
      ? ConnectionMode.rpc
      : (localStorage.getItem('connectionMode') as ConnectionMode) || ConnectionMode.normal
  );
  const changePreferredConnectionMode = () =>
    !RPC_ONLY_MODE &&
    setPreferredConnectionMode((mode) => {
      const nextMode = mode === ConnectionMode.rpc ? ConnectionMode.normal : ConnectionMode.rpc;
      localStorage.setItem('connectionMode', nextMode);
      return nextMode;
    });

  useEffect(() => {
    console.log('RPC_ONLY_MODE_ENABLED', RPC_ONLY_MODE);
  }, [RPC_ONLY_MODE]);

  const isRPCMandatory = true;
  const isRPCActive = preferredConnectionMode === ConnectionMode.rpc || isRPCMandatory;
  return (
    <ConnectionStatusDataContext.Provider
      value={{
        preferredConnectionMode,
        changePreferredConnectionMode,
        isRPCMandatory,
        isRPCActive,
      }}
    >
      {children}
    </ConnectionStatusDataContext.Provider>
  );
}

export const useConnectionStatusContext = () => useContext(ConnectionStatusDataContext);
