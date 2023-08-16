/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type { UwUKitties, UwUKittiesInterface } from '../../../contracts/NFTHelper.sol/UwUKitties';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'baseURIString',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLastId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numberOfTokens',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'baseURI',
        type: 'string',
      },
    ],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
] as const;

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f557755204b6974747900000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f5577554b0000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000412565b508060019081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b61340b80620005096000396000f3fe6080604052600436106101235760003560e01c80638da5cb5b116100a0578063b88d4fde11610064578063b88d4fde14610415578063c87b56dd1461043e578063cf76a1531461047b578063e985e9c5146104a6578063f2fde38b146104e357610163565b80638da5cb5b1461034257806395d89b411461036d578063a0712d6814610398578063a22cb465146103c1578063a8e5862d146103ea57610163565b806342842e0e116100e757806342842e0e1461025f57806355f804b3146102885780636352211e146102b157806370a08231146102ee578063715018a61461032b57610163565b806301ffc9a71461016857806306fdde03146101a5578063081812fc146101d0578063095ea7b31461020d57806323b872dd1461023657610163565b36610163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015a90611def565b60405180910390fd5b600080fd5b34801561017457600080fd5b5061018f600480360381019061018a9190611e7b565b61050c565b60405161019c9190611ec3565b60405180910390f35b3480156101b157600080fd5b506101ba6105ee565b6040516101c79190611f5d565b60405180910390f35b3480156101dc57600080fd5b506101f760048036038101906101f29190611fb5565b610680565b6040516102049190612023565b60405180910390f35b34801561021957600080fd5b50610234600480360381019061022f919061206a565b6106c6565b005b34801561024257600080fd5b5061025d600480360381019061025891906120aa565b6107dd565b005b34801561026b57600080fd5b50610286600480360381019061028191906120aa565b61083d565b005b34801561029457600080fd5b506102af60048036038101906102aa9190612232565b61085d565b005b3480156102bd57600080fd5b506102d860048036038101906102d39190611fb5565b61095a565b6040516102e59190612023565b60405180910390f35b3480156102fa57600080fd5b506103156004803603810190610310919061227b565b610a0b565b60405161032291906122b7565b60405180910390f35b34801561033757600080fd5b50610340610ac2565b005b34801561034e57600080fd5b50610357610ad6565b6040516103649190612023565b60405180910390f35b34801561037957600080fd5b50610382610b00565b60405161038f9190611f5d565b60405180910390f35b3480156103a457600080fd5b506103bf60048036038101906103ba9190611fb5565b610b92565b005b3480156103cd57600080fd5b506103e860048036038101906103e391906122fe565b610c78565b005b3480156103f657600080fd5b506103ff610c8e565b60405161040c91906122b7565b60405180910390f35b34801561042157600080fd5b5061043c600480360381019061043791906123df565b610c9f565b005b34801561044a57600080fd5b5061046560048036038101906104609190611fb5565b610d01565b6040516104729190611f5d565b60405180910390f35b34801561048757600080fd5b50610490610e21565b60405161049d9190611f5d565b60405180910390f35b3480156104b257600080fd5b506104cd60048036038101906104c89190612462565b610eaf565b6040516104da9190611ec3565b60405180910390f35b3480156104ef57600080fd5b5061050a6004803603810190610505919061227b565b610f43565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105d757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105e757506105e682610fc6565b5b9050919050565b6060600080546105fd906124d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610629906124d1565b80156106765780601f1061064b57610100808354040283529160200191610676565b820191906000526020600020905b81548152906001019060200180831161065957829003601f168201915b5050505050905090565b600061068b82611030565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106d18261095a565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610741576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073890612574565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661076061107b565b73ffffffffffffffffffffffffffffffffffffffff16148061078f575061078e8161078961107b565b610eaf565b5b6107ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c590612606565b60405180910390fd5b6107d88383611083565b505050565b6107ee6107e861107b565b8261113c565b61082d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082490612698565b60405180910390fd5b6108388383836111d1565b505050565b61085883838360405180602001604052806000815250610c9f565b505050565b610865611437565b61090860098054610875906124d1565b80601f01602080910402602001604051908101604052809291908181526020018280546108a1906124d1565b80156108ee5780601f106108c3576101008083540402835291602001916108ee565b820191906000526020600020905b8154815290600101906020018083116108d157829003601f168201915b5050505050604051806020016040528060008152506114b5565b610947576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093e90612704565b60405180910390fd5b806009908161095691906128d0565b5050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a02576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f9906129ee565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7290612a80565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610aca611437565b610ad4600061150e565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610b0f906124d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3b906124d1565b8015610b885780601f10610b5d57610100808354040283529160200191610b88565b820191906000526020600020905b815481529060010190602001808311610b6b57829003601f168201915b5050505050905090565b610b9a611437565b60008103610bdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd490612aec565b60405180910390fd5b6032610be7610c8e565b82610bf29190612b3b565b1115610c33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2a90612be1565b60405180910390fd5b60005b81811015610c7457610c4860086115d4565b6000610c5460086115ea565b9050610c6033826115f8565b508080610c6c90612c01565b915050610c36565b5050565b610c8a610c8361107b565b8383611616565b5050565b6000610c9a60086115ea565b905090565b610cb0610caa61107b565b8361113c565b610cef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce690612698565b60405180910390fd5b610cfb84848484611782565b50505050565b6060610d0c82611030565b610daf60098054610d1c906124d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610d48906124d1565b8015610d955780601f10610d6a57610100808354040283529160200191610d95565b820191906000526020600020905b815481529060010190602001808311610d7857829003601f168201915b5050505050604051806020016040528060008152506114b5565b15610def576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de690612c95565b60405180910390fd5b6009610dfa836117de565b604051602001610e0b929190612dc0565b6040516020818303038152906040529050919050565b60098054610e2e906124d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5a906124d1565b8015610ea75780601f10610e7c57610100808354040283529160200191610ea7565b820191906000526020600020905b815481529060010190602001808311610e8a57829003601f168201915b505050505081565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610f4b611437565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610fba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb190612e61565b60405180910390fd5b610fc38161150e565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6110398161193e565b611078576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106f906129ee565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166110f68361095a565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806111488361095a565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061118a57506111898185610eaf565b5b806111c857508373ffffffffffffffffffffffffffffffffffffffff166111b084610680565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166111f18261095a565b73ffffffffffffffffffffffffffffffffffffffff1614611247576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123e90612ef3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ad90612f85565b60405180910390fd5b6112c18383836119aa565b6112cc600082611083565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461131c9190612fa5565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113739190612b3b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46114328383836119af565b505050565b61143f61107b565b73ffffffffffffffffffffffffffffffffffffffff1661145d610ad6565b73ffffffffffffffffffffffffffffffffffffffff16146114b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114aa90613025565b60405180910390fd5b565b6000816040516020016114c89190613045565b60405160208183030381529060405280519060200120836040516020016114ef9190613045565b6040516020818303038152906040528051906020012014905092915050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001816000016000828254019250508190555050565b600081600001549050919050565b6116128282604051806020016040528060008152506119b4565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167b906130a8565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516117759190611ec3565b60405180910390a3505050565b61178d8484846111d1565b61179984848484611a0f565b6117d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117cf9061313a565b60405180910390fd5b50505050565b606060008203611825576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611939565b600082905060005b6000821461185757808061184090612c01565b915050600a826118509190613189565b915061182d565b60008167ffffffffffffffff81111561187357611872612107565b5b6040519080825280601f01601f1916602001820160405280156118a55781602001600182028036833780820191505090505b5090505b60008514611932576001826118be9190612fa5565b9150600a856118cd91906131ba565b60306118d99190612b3b565b60f81b8183815181106118ef576118ee6131eb565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561192b9190613189565b94506118a9565b8093505050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b6119be8383611b96565b6119cb6000848484611a0f565b611a0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a019061313a565b60405180910390fd5b505050565b6000611a308473ffffffffffffffffffffffffffffffffffffffff16611d6f565b15611b89578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611a5961107b565b8786866040518563ffffffff1660e01b8152600401611a7b949392919061326f565b6020604051808303816000875af1925050508015611ab757506040513d601f19601f82011682018060405250810190611ab491906132d0565b60015b611b39573d8060008114611ae7576040519150601f19603f3d011682016040523d82523d6000602084013e611aec565b606091505b506000815103611b31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b289061313a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611b8e565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611c05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bfc90613349565b60405180910390fd5b611c0e8161193e565b15611c4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c45906133b5565b60405180910390fd5b611c5a600083836119aa565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611caa9190612b3b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611d6b600083836119af565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082825260208201905092915050565b7f466f7262696464656e0000000000000000000000000000000000000000000000600082015250565b6000611dd9600983611d92565b9150611de482611da3565b602082019050919050565b60006020820190508181036000830152611e0881611dcc565b9050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611e5881611e23565b8114611e6357600080fd5b50565b600081359050611e7581611e4f565b92915050565b600060208284031215611e9157611e90611e19565b5b6000611e9f84828501611e66565b91505092915050565b60008115159050919050565b611ebd81611ea8565b82525050565b6000602082019050611ed86000830184611eb4565b92915050565b600081519050919050565b60005b83811015611f07578082015181840152602081019050611eec565b60008484015250505050565b6000601f19601f8301169050919050565b6000611f2f82611ede565b611f398185611d92565b9350611f49818560208601611ee9565b611f5281611f13565b840191505092915050565b60006020820190508181036000830152611f778184611f24565b905092915050565b6000819050919050565b611f9281611f7f565b8114611f9d57600080fd5b50565b600081359050611faf81611f89565b92915050565b600060208284031215611fcb57611fca611e19565b5b6000611fd984828501611fa0565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061200d82611fe2565b9050919050565b61201d81612002565b82525050565b60006020820190506120386000830184612014565b92915050565b61204781612002565b811461205257600080fd5b50565b6000813590506120648161203e565b92915050565b6000806040838503121561208157612080611e19565b5b600061208f85828601612055565b92505060206120a085828601611fa0565b9150509250929050565b6000806000606084860312156120c3576120c2611e19565b5b60006120d186828701612055565b93505060206120e286828701612055565b92505060406120f386828701611fa0565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61213f82611f13565b810181811067ffffffffffffffff8211171561215e5761215d612107565b5b80604052505050565b6000612171611e0f565b905061217d8282612136565b919050565b600067ffffffffffffffff82111561219d5761219c612107565b5b6121a682611f13565b9050602081019050919050565b82818337600083830152505050565b60006121d56121d084612182565b612167565b9050828152602081018484840111156121f1576121f0612102565b5b6121fc8482856121b3565b509392505050565b600082601f830112612219576122186120fd565b5b81356122298482602086016121c2565b91505092915050565b60006020828403121561224857612247611e19565b5b600082013567ffffffffffffffff81111561226657612265611e1e565b5b61227284828501612204565b91505092915050565b60006020828403121561229157612290611e19565b5b600061229f84828501612055565b91505092915050565b6122b181611f7f565b82525050565b60006020820190506122cc60008301846122a8565b92915050565b6122db81611ea8565b81146122e657600080fd5b50565b6000813590506122f8816122d2565b92915050565b6000806040838503121561231557612314611e19565b5b600061232385828601612055565b9250506020612334858286016122e9565b9150509250929050565b600067ffffffffffffffff82111561235957612358612107565b5b61236282611f13565b9050602081019050919050565b600061238261237d8461233e565b612167565b90508281526020810184848401111561239e5761239d612102565b5b6123a98482856121b3565b509392505050565b600082601f8301126123c6576123c56120fd565b5b81356123d684826020860161236f565b91505092915050565b600080600080608085870312156123f9576123f8611e19565b5b600061240787828801612055565b945050602061241887828801612055565b935050604061242987828801611fa0565b925050606085013567ffffffffffffffff81111561244a57612449611e1e565b5b612456878288016123b1565b91505092959194509250565b6000806040838503121561247957612478611e19565b5b600061248785828601612055565b925050602061249885828601612055565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806124e957607f821691505b6020821081036124fc576124fb6124a2565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061255e602183611d92565b915061256982612502565b604082019050919050565b6000602082019050818103600083015261258d81612551565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006125f0603e83611d92565b91506125fb82612594565b604082019050919050565b6000602082019050818103600083015261261f816125e3565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612682602e83611d92565b915061268d82612626565b604082019050919050565b600060208201905081810360008301526126b181612675565b9050919050565b7f54686520426173652055524c2077617320616c72656164792073657400000000600082015250565b60006126ee601c83611d92565b91506126f9826126b8565b602082019050919050565b6000602082019050818103600083015261271d816126e1565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026127867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612749565b6127908683612749565b95508019841693508086168417925050509392505050565b6000819050919050565b60006127cd6127c86127c384611f7f565b6127a8565b611f7f565b9050919050565b6000819050919050565b6127e7836127b2565b6127fb6127f3826127d4565b848454612756565b825550505050565b600090565b612810612803565b61281b8184846127de565b505050565b5b8181101561283f57612834600082612808565b600181019050612821565b5050565b601f8211156128845761285581612724565b61285e84612739565b8101602085101561286d578190505b61288161287985612739565b830182612820565b50505b505050565b600082821c905092915050565b60006128a760001984600802612889565b1980831691505092915050565b60006128c08383612896565b9150826002028217905092915050565b6128d982611ede565b67ffffffffffffffff8111156128f2576128f1612107565b5b6128fc82546124d1565b612907828285612843565b600060209050601f83116001811461293a5760008415612928578287015190505b61293285826128b4565b86555061299a565b601f19841661294886612724565b60005b828110156129705784890151825560018201915060208501945060208101905061294b565b8683101561298d5784890151612989601f891682612896565b8355505b6001600288020188555050505b505050505050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006129d8601883611d92565b91506129e3826129a2565b602082019050919050565b60006020820190508181036000830152612a07816129cb565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612a6a602983611d92565b9150612a7582612a0e565b604082019050919050565b60006020820190508181036000830152612a9981612a5d565b9050919050565b7f57726f6e6720616d6f756e74206f6620746f6b656e732070726f766964656400600082015250565b6000612ad6601f83611d92565b9150612ae182612aa0565b602082019050919050565b60006020820190508181036000830152612b0581612ac9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612b4682611f7f565b9150612b5183611f7f565b9250828201905080821115612b6957612b68612b0c565b5b92915050565b7f4974206973206e6f7420616c6c6f77656420746f206d696e74206d6f7265207460008201527f68616e20353020746f6b656e7300000000000000000000000000000000000000602082015250565b6000612bcb602d83611d92565b9150612bd682612b6f565b604082019050919050565b60006020820190508181036000830152612bfa81612bbe565b9050919050565b6000612c0c82611f7f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612c3e57612c3d612b0c565b5b600182019050919050565b7f5468657265206973206e6f2055524920666f722074686520746f6b656e000000600082015250565b6000612c7f601d83611d92565b9150612c8a82612c49565b602082019050919050565b60006020820190508181036000830152612cae81612c72565b9050919050565b600081905092915050565b60008154612ccd816124d1565b612cd78186612cb5565b94506001821660008114612cf25760018114612d0757612d3a565b60ff1983168652811515820286019350612d3a565b612d1085612724565b60005b83811015612d3257815481890152600182019150602081019050612d13565b838801955050505b50505092915050565b6000612d4e82611ede565b612d588185612cb5565b9350612d68818560208601611ee9565b80840191505092915050565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000600082015250565b6000612daa600583612cb5565b9150612db582612d74565b600582019050919050565b6000612dcc8285612cc0565b9150612dd88284612d43565b9150612de382612d9d565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612e4b602683611d92565b9150612e5682612def565b604082019050919050565b60006020820190508181036000830152612e7a81612e3e565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612edd602583611d92565b9150612ee882612e81565b604082019050919050565b60006020820190508181036000830152612f0c81612ed0565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612f6f602483611d92565b9150612f7a82612f13565b604082019050919050565b60006020820190508181036000830152612f9e81612f62565b9050919050565b6000612fb082611f7f565b9150612fbb83611f7f565b9250828203905081811115612fd357612fd2612b0c565b5b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061300f602083611d92565b915061301a82612fd9565b602082019050919050565b6000602082019050818103600083015261303e81613002565b9050919050565b60006130518284612d43565b915081905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613092601983611d92565b915061309d8261305c565b602082019050919050565b600060208201905081810360008301526130c181613085565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613124603283611d92565b915061312f826130c8565b604082019050919050565b6000602082019050818103600083015261315381613117565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061319482611f7f565b915061319f83611f7f565b9250826131af576131ae61315a565b5b828204905092915050565b60006131c582611f7f565b91506131d083611f7f565b9250826131e0576131df61315a565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006132418261321a565b61324b8185613225565b935061325b818560208601611ee9565b61326481611f13565b840191505092915050565b60006080820190506132846000830187612014565b6132916020830186612014565b61329e60408301856122a8565b81810360608301526132b08184613236565b905095945050505050565b6000815190506132ca81611e4f565b92915050565b6000602082840312156132e6576132e5611e19565b5b60006132f4848285016132bb565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613333602083611d92565b915061333e826132fd565b602082019050919050565b6000602082019050818103600083015261336281613326565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061339f601c83611d92565b91506133aa82613369565b602082019050919050565b600060208201905081810360008301526133ce81613392565b905091905056fea2646970667358221220cad30ca4d2a653f3ce47ad6384ced30bb95454519772ee41f913058d9459e42864736f6c63430008110033';

type UwUKittiesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UwUKittiesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UwUKitties__factory extends ContractFactory {
  constructor(...args: UwUKittiesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<UwUKitties> {
    return super.deploy(overrides || {}) as Promise<UwUKitties>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UwUKitties {
    return super.attach(address) as UwUKitties;
  }
  override connect(signer: Signer): UwUKitties__factory {
    return super.connect(signer) as UwUKitties__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UwUKittiesInterface {
    return new utils.Interface(_abi) as UwUKittiesInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): UwUKitties {
    return new Contract(address, _abi, signerOrProvider) as UwUKitties;
  }
}
