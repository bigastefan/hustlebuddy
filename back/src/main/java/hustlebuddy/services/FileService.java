package hustlebuddy.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import hustlebuddy.models.PersonalData;
import hustlebuddy.repositories.FileRepository;

@Service
public class FileService {

private String defaultProfilePicturePath = "src/main/resources/images/profile_images/default.png";
	
	@Autowired
	private FileRepository fileRepository; 

	public void saveProfileImage(MultipartFile file, String fileName, PersonalData personalData) throws IOException {
	    Tika tika = new Tika();
	    String mimeType = tika.detect(file.getBytes());
		if(file != null && (mimeType.equals("image/png") || mimeType.equals("image/jpeg"))) {
			File convertFile = new File("src/main/resources/images/profile_images/" + fileName + file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")));
			convertFile.createNewFile();
			FileOutputStream fout = new FileOutputStream(convertFile);
			fout.write(file.getBytes());
			fout.close();
			personalData.setProfileImagePath("images/profile_images/" + fileName + file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")));
		}
		else {
			InputStream initialStream = new FileInputStream(new File(defaultProfilePicturePath));
		    byte[] buffer = new byte[initialStream.available()];
		    initialStream.read(buffer);
		    File targetFile = new File("src/main/resources/images/profile_images/" + fileName + defaultProfilePicturePath.substring(defaultProfilePicturePath.lastIndexOf(".")));
		    targetFile.createNewFile();
		    OutputStream outStream = new FileOutputStream(targetFile);
		    outStream.write(buffer);
		    initialStream.close();
		    outStream.close();
		    personalData.setProfileImagePath("images/profile_images/" + fileName + defaultProfilePicturePath.substring(defaultProfilePicturePath.lastIndexOf(".")));
		}
	}
	
//	public void saveTopicIcon(MultipartFile file, String fileName, Topic tData) throws IOException {
//	    Tika tika = new Tika();
//	    String mimeType = tika.detect(file.getBytes());
//		if(file != null && (mimeType.equals("image/png") || mimeType.equals("image/jpeg"))) {
//			File convertFile = new File("src/main/resources/images/topic_icons/" + fileName + file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")));
//			convertFile.createNewFile();
//			FileOutputStream fout = new FileOutputStream(convertFile);
//			fout.write(file.getBytes());
//			fout.close();
//			tData.setIconPath("images/topic_icons/" + fileName + file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")));
//		}
//	}

}
