import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

import { polygon } from '@reown/appkit/networks';
import { http } from '@wagmi/core'
import React from 'react';

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = import.meta.env.VITE_APP_KIT_PROJECT_KEY;

// 2. Create a metadata object - optional
const metadata = {
    name: 'AppKit',
    description: 'AppKit Example',
    url: 'https://example.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set the networks
export const networks = [polygon]

// 4. Create Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
    transports: {
        // [customNetwork.id]: http(),
    },
})

// 5. Create modal
createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    metadata,
    chainImages: {
        // [customNetwork.id]: 'https://ubitcoin.in/wp-content/uploads/2023/09/logo-1.png',
    }
})

export function AppKitProvider({ children }) {
    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}