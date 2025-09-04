import React, { useEffect } from 'react'
import { useAppKitTheme, useAppKitAccount, useAppKit } from '@reown/appkit/react'
import { Button } from '@chakra-ui/react';

function ConnectWallet() {
    const { setThemeVariables } = useAppKitTheme();
    const { isConnected } = useAppKitAccount();
    const { open } = useAppKit();

    useEffect(() => {
        setThemeVariables({
            "--w3m-accent": "#852df3"
        });
    }, [])

    return (
        <>
            <div className="connect-wallet pe-3">
                {/* {
                    !isConnected ?
                        <Button
                            variant="darkBrand"
                            color="white"
                            fontSize="sm"
                            fontWeight="500"
                            borderRadius="70px"
                            px="24px"
                            py="5px"
                            className="connectbutton"
                            onClick={open}
                        >
                            Connect Wallet
                        </Button> :
                        <appkit-button balance={'hide'} />
                } */}
                <w3m-button />
            </div>
        </>
    )
}

export default ConnectWallet
