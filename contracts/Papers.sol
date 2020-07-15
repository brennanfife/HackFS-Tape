// SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.6.10;

// import "@openzeppelin/contracts/utils/Pausable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract Papers is Pausable, Ownable {
//     struct File {
//         string ipfsHash;
//         string title;
//         string course;
//         string contentType;
//         address uploader;
//         uint256 uploadedOn;
//     }

//     mapping(address => File[]) public ownerToFiles;

//     event LogFileUploaded(
//         string _ipfsHash,
//         string _title,
//         string _course,
//         string _contentType,
//         address indexed _owner,
//         uint256 _uploadedOn
//     );

//     function uploadFile(
//         string memory _ipfsHash,
//         string memory _title,
//         string memory _course,
//         string memory _contentType
//     ) public whenNotPaused returns (bool _success) {
//         File memory file = File(
//             _ipfsHash,
//             _title,
//             _course,
//             _contentType,
//             msg.sender,
//             now
//         );

//         ownerToFiles[msg.sender].push(file);

//         emit LogFileUploaded(
//             _ipfsHash,
//             _title,
//             _course,
//             _contentType,
//             msg.sender,
//             now
//         );

//         _success = true;
//     }

//     function getFileCount(address _owner)
//         public
//         view
//         whenNotPaused
//         returns (uint256)
//     {
//         return ownerToFiles[_owner].length;
//     }

//     function getFile(address _owner, uint8 _index)
//         public
//         view
//         whenNotPaused
//         returns (
//             string memory _ipfsHash,
//             string memory _title,
//             string memory _course,
//             string memory _contentType,
//             address _uploader,
//             uint256 _uploadedOn
//         )
//     {
//         File storage file = ownerToFiles[_owner][_index];

//         return (
//             file.ipfsHash,
//             file.title,
//             file.course,
//             file.contentType,
//             file.uploader,
//             file.uploadedOn
//         );
//     }

//     receive() external payable {}

//     fallback() external payable {}
// }
