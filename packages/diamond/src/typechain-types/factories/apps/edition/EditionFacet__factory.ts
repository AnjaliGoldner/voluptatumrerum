/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EditionFacet,
  EditionFacetInterface,
} from "../../../contracts/apps/edition/EditionFacet";

const _abi = [
  {
    inputs: [],
    name: "NewOwnerIsZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NoHandoverRequest",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
    ],
    name: "EditionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "EditionMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "OwnershipHandoverCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "OwnershipHandoverRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roles",
        type: "uint256",
      },
    ],
    name: "RolesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxQuantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPerWallet",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPerMint",
        type: "uint256",
      },
    ],
    name: "createEdition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "editionMintFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "editionRevenue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "editionsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
    ],
    name: "getEdition",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "tokenURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxQuantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPerWallet",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPerMint",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct EditionStorage.Edition",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
    ],
    name: "getEditionPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "mintEdition",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "setEditionActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "setEditionMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "setEditionSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "setEditionTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxQuantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPerWallet",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPerMint",
        type: "uint256",
      },
    ],
    name: "updateEdition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506118a0806100206000396000f3fe6080604052600436106100a75760003560e01c8063906c012111610064578063906c012114610167578063a619976d14610187578063a642c032146101bb578063c88355b4146101e8578063ca696f4814610208578063fab7ee7b1461022857600080fd5b80631475df11146100ac57806343d7b495146100ce5780635eb30d1c146100e1578063654762ce146101125780638328265714610132578063835f610d14610152575b600080fd5b3480156100b857600080fd5b506100cc6100c7366004611285565b610248565b005b6100cc6100dc3660046112d5565b6102b7565b3480156100ed57600080fd5b5060008051602061184b833981519152545b6040519081526020015b60405180910390f35b34801561011e57600080fd5b506100cc61012d36600461136e565b61057e565b34801561013e57600080fd5b506100cc61014d366004611446565b6105e8565b34801561015e57600080fd5b506100ff610744565b34801561017357600080fd5b506100cc6101823660046114a3565b6107f7565b34801561019357600080fd5b507f0193784bd9621be915feb61a02526941c48cf0476dacde52dea7f0e7110ed0d9546100ff565b3480156101c757600080fd5b506101db6101d63660046114ea565b610852565b6040516101099190611549565b3480156101f457600080fd5b506100ff6102033660046114ea565b6109f4565b34801561021457600080fd5b506100cc6102233660046115e3565b610b03565b34801561023457600080fd5b506100cc610243366004611608565b610b70565b600261025381610bc3565b60008051602061184b8339815191528054871061028b5760405162461bcd60e51b81526004016102829061162a565b60405180910390fd5b600096875260010160205250604090942060028101939093556004830191909155600582015560060155565b60007f45f38af8fd646bf817698fe2be76218d850d401ba88ffd7c9cd1b4f5c9a1db56600401546201000090046001600160a01b03169050600060008051602061184b83398151915260008781526001820160205260408082209051630317c2dd60e01b8152600481018990529293509181906001600160a01b03861690630317c2dd906024016040805180830381865afa15801561035a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037e9190611652565b91509150888460000154116103a55760405162461bcd60e51b81526004016102829061162a565b6008830154600160a01b900460ff166103ed5760405162461bcd60e51b815260206004820152600a6024820152694e6f742061637469766560b01b6044820152606401610282565b3481838a8660020154610400919061168c565b61040a91906116a3565b61041491906116a3565b11156104545760405162461bcd60e51b815260206004820152600f60248201526e15985b1d59481a5b98dbdc9c9958dd608a1b6044820152606401610282565b61046184848b8d8c610bf9565b61046d838b8989610d2e565b60038401805434018390038290039055600089815260028501602090815260408083206001600160a01b038e16845290915290208054890190556104b18583610def565b801561052257610522306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051c91906116b6565b82610def565b61052d838b8a610f0d565b604080518981523460208201528a916001600160a01b038d16917f2974dcc018eac8a0cea38a8688ad4a3cc7686e4edd75be71818e23d62ef2265f910160405180910390a350505050505050505050565b600261058981610bc3565b60008051602061184b833981519152805484106105b85760405162461bcd60e51b81526004016102829061162a565b60009384526001016020525060409091206008018054911515600160a01b0260ff60a01b19909216919091179055565b60026105f381610bc3565b60008051602061184b83398151915280546040805161014081018252898152600060208201819052918101899052606081018290526080810188905260a0810187905260c0810186905260e08101919091526101008101610652611063565b6001600160a01b0316815260006020918201819052838152600185019091526040902081518190610683908261175b565b5060208201516001808301919091556040808401516002840155606084015160038401556080840151600484015560a0840151600584015560c0840151600684015560e0840151600784015561010084015160089093018054610120909501511515600160a01b026001600160a81b03199095166001600160a01b039094169390931793909317909155820183555181907f962bb64b059ad60d491bef43125921210925c52b11ff1cc093409113c8c5fe3790600090a25050505050505050565b7f45f38af8fd646bf817698fe2be76218d850d401ba88ffd7c9cd1b4f5c9a1db5a5460408051630317c2dd60e01b81526001600482015281516000936201000090046001600160a01b031692849283928592630317c2dd92602480820193918290030181865afa1580156107bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e09190611652565b90925090506107ef81836116a3565b935050505090565b600261080281610bc3565b60008051602061184b833981519152805484106108315760405162461bcd60e51b81526004016102829061162a565b6000848152600182016020526040902061084b848261175b565b5050505050565b6108b6604051806101400160405280606081526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b60008281527f0193784bd9621be915feb61a02526941c48cf0476dacde52dea7f0e7110ed0d7602052604090819020815161014081019092528054829082906108fe906116d3565b80601f016020809104026020016040519081016040528092919081815260200182805461092a906116d3565b80156109775780601f1061094c57610100808354040283529160200191610977565b820191906000526020600020905b81548152906001019060200180831161095a57829003601f168201915b505050918352505060018201546020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460c0820152600782015460e08201526008909101546001600160a01b038116610100830152600160a01b900460ff1615156101209091015292915050565b7f45f38af8fd646bf817698fe2be76218d850d401ba88ffd7c9cd1b4f5c9a1db5a5460008051602061184b83398151915280546000926201000090046001600160a01b031691908410610a595760405162461bcd60e51b81526004016102829061162a565b60008481526001828101602052604080832060028101549151630317c2dd60e01b8152600481019390935292909181906001600160a01b03871690630317c2dd906024016040805180830381865afa158015610ab9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610add9190611652565b909250905080610aed83856116a3565b610af791906116a3565b98975050505050505050565b6002610b0e81610bc3565b60008051602061184b83398151915280548410610b3d5760405162461bcd60e51b81526004016102829061162a565b600093845260010160205250604090912060080180546001600160a01b0319166001600160a01b03909216919091179055565b6002610b7b81610bc3565b60008051602061184b83398151915280548410610baa5760405162461bcd60e51b81526004016102829061162a565b6000938452600190810160205260409093209092015550565b638b78c6d8600c5233600052806020600c205416610bf657638b78c6d819543314610bf6576382b429006000526004601cfd5b50565b6005840154600084815260028701602090815260408083206001600160a01b0387168452909152902054610c2e9083906116a3565b1115610c7c5760405162461bcd60e51b815260206004820152601760248201527f4578636565646564206d6178207065722077616c6c65740000000000000000006044820152606401610282565b8360060154811115610cc85760405162461bcd60e51b8152602060048201526015602482015274115e18d959591959081b585e081c195c881b5a5b9d605a1b6044820152606401610282565b60048401541580610cec57508360040154818560030154610ce991906116a3565b11155b61084b5760405162461bcd60e51b8152602060048201526013602482015272115e18d959591959081b585e08185b5bdd5b9d606a1b6044820152606401610282565b600184015415610de957610dad82828080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060018601546040516bffffffffffffffffffffffff19606088901b166020820152603401604051602081830303815290604052805190602001206110a9565b610de95760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b210383937b7b360991b6044820152606401610282565b50505050565b80471015610e3f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610282565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610e8c576040519150601f19603f3d011682016040523d82523d6000602084013e610e91565b606091505b5050905080610f085760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610282565b505050565b7f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4054805b610f3b82846116a3565b81101561104e576040518060400160405280600115158152602001866000018054610f65906116d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610f91906116d3565b8015610fde5780601f10610fb357610100808354040283529160200191610fde565b820191906000526020600020905b815481529060010190602001808311610fc157829003601f168201915b505050505081525061100d7f45f38af8fd646bf817698fe2be76218d850d401ba88ffd7c9cd1b4f5c9a1db5690565b6000838152600391909101602090815260409091208251815460ff1916901515178155908201516001820190611043908261175b565b505050600101610f31565b5060038401805483019055610de983836110bf565b7f45f38af8fd646bf817698fe2be76218d850d401ba88ffd7c9cd1b4f5c9a1db5e546000906001600160a01b031633036110a4575060131936013560601c90565b503390565b6000826110b685846111fa565b14949350505050565b7f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c405460008290036110fa576110fa63b562e8dd60e01b611249565b60008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c44602090815260408083206001600160a01b0387164260a01b6001881460e11b1781179091558084527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c45909252822080546801000000000000000186020190559081900361119657611196622e076360e81b611249565b818301825b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a481816001019150810361119b57507f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c405550505050565b600081815b845181101561123f5761122b8286838151811061121e5761121e61181b565b6020026020010151611253565b91508061123781611831565b9150506111ff565b5090505b92915050565b8060005260046000fd5b600081831061126f57600082815260208490526040902061127e565b60008381526020839052604090205b9392505050565b600080600080600060a0868803121561129d57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6001600160a01b0381168114610bf657600080fd5b6000806000806000608086880312156112ed57600080fd5b85356112f8816112c0565b94506020860135935060408601359250606086013567ffffffffffffffff8082111561132357600080fd5b818801915088601f83011261133757600080fd5b81358181111561134657600080fd5b8960208260051b850101111561135b57600080fd5b9699959850939650602001949392505050565b6000806040838503121561138157600080fd5b823591506020830135801515811461139857600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126113ca57600080fd5b813567ffffffffffffffff808211156113e5576113e56113a3565b604051601f8301601f19908116603f0116810190828211818310171561140d5761140d6113a3565b8160405283815286602085880101111561142657600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a0868803121561145e57600080fd5b853567ffffffffffffffff81111561147557600080fd5b611481888289016113b9565b9860208801359850604088013597606081013597506080013595509350505050565b600080604083850312156114b657600080fd5b82359150602083013567ffffffffffffffff8111156114d457600080fd5b6114e0858286016113b9565b9150509250929050565b6000602082840312156114fc57600080fd5b5035919050565b6000815180845260005b818110156115295760208185018101518683018201520161150d565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260008251610140806020850152611568610160850183611503565b9150602085015160408501526040850151606085015260608501516080850152608085015160a085015260a085015160c085015260c085015160e085015260e08501516101008181870152808701519150506101206115d1818701836001600160a01b03169052565b90950151151593019290925250919050565b600080604083850312156115f657600080fd5b823591506020830135611398816112c0565b6000806040838503121561161b57600080fd5b50508035926020909101359150565b6020808252600e908201526d111bd95cc81b9bdd08195e1a5cdd60921b604082015260600190565b6000806040838503121561166557600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761124357611243611676565b8082018082111561124357611243611676565b6000602082840312156116c857600080fd5b815161127e816112c0565b600181811c908216806116e757607f821691505b60208210810361170757634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610f0857600081815260208120601f850160051c810160208610156117345750805b601f850160051c820191505b8181101561175357828155600101611740565b505050505050565b815167ffffffffffffffff811115611775576117756113a3565b6117898161178384546116d3565b8461170d565b602080601f8311600181146117be57600084156117a65750858301515b600019600386901b1c1916600185901b178555611753565b600085815260208120601f198616915b828110156117ed578886015182559484019460019091019084016117ce565b508582101561180b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b60006001820161184357611843611676565b506001019056fe0193784bd9621be915feb61a02526941c48cf0476dacde52dea7f0e7110ed0d6a2646970667358221220d55b27b192b0534c0f2f9d6713b623693c32fe9a5beb8021d520ac801733f08e64736f6c63430008130033";

type EditionFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EditionFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EditionFacet__factory extends ContractFactory {
  constructor(...args: EditionFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EditionFacet> {
    return super.deploy(overrides || {}) as Promise<EditionFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EditionFacet {
    return super.attach(address) as EditionFacet;
  }
  override connect(signer: Signer): EditionFacet__factory {
    return super.connect(signer) as EditionFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EditionFacetInterface {
    return new utils.Interface(_abi) as EditionFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EditionFacet {
    return new Contract(address, _abi, signerOrProvider) as EditionFacet;
  }
}