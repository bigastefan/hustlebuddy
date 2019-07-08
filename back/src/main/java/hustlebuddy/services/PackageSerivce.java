package hustlebuddy.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hustlebuddy.models.Packages;
import hustlebuddy.repositories.PackagesRepository;

@Service
public class PackageSerivce {

	@Autowired
	PackagesRepository packagesRepository;
	
	public Iterable<Packages> getPackages() {
		return packagesRepository.findAll();
	}
	
	public Optional<Packages> getPackagesById(Long id) {
		return packagesRepository.findById(id);
	}
	
	public void addPackages(Packages packages) {
        packagesRepository.save(packages);
    }

    public void removePackages(Long id) {
        Optional<Packages> packages = packagesRepository.findById(id);
        packagesRepository.delete(packages.get());
    }

    public void updatePackages(Long id, Packages packages) {
        Optional<Packages> pack = packagesRepository.findById(id);
        if(pack.isPresent()) {
            packages.setId(pack.get().getId());
            packagesRepository.save(packages);
        }
    }

}
