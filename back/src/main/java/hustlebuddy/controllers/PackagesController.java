package hustlebuddy.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import hustlebuddy.models.Packages;
import hustlebuddy.services.PackageSerivce;
import hustlebuddy.utils.View.HideOptionalProperties;

@CrossOrigin(origins={"http://localhost:4200"})
@RestController
@RequestMapping("/packages")
public class PackagesController {

	@Autowired
	PackageSerivce packageSerivce;
	
	@JsonView(HideOptionalProperties.class)
    @RequestMapping(value="/all", method=RequestMethod.GET)
    public ResponseEntity<Iterable<Packages>> getAllPackages() {
        return new ResponseEntity<Iterable<Packages>>(packageSerivce.getPackages(), HttpStatus.OK);
    }

	@JsonView(HideOptionalProperties.class)
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public ResponseEntity<Packages> getPackageById(@PathVariable Long id) {
        Optional<Packages> packages = packageSerivce.getPackagesById(id);
        if(packages.isPresent()) {
            return new ResponseEntity<Packages>(packages.get(), HttpStatus.OK);
        }
        return new ResponseEntity<Packages>(HttpStatus.NOT_FOUND);
    }

	@Secured("ROLE_ADMINISTRATOR")
    @RequestMapping(value="/add", method=RequestMethod.POST)
    public ResponseEntity<Packages> addPackages(@RequestBody Packages packages) {
    	packageSerivce.addPackages(packages);
        return new ResponseEntity<Packages>(packages, HttpStatus.CREATED);
    }

	@Secured("ROLE_ADMINISTRATOR")
    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public ResponseEntity<Packages> updatePackage(@PathVariable Long id, @RequestBody Packages packages) {
    	packageSerivce.updatePackages(id, packages);
        return new ResponseEntity<Packages>(packages, HttpStatus.CREATED);
    }

	@Secured("ROLE_ADMINISTRATOR")
    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<Packages> removePackage(@PathVariable Long id) {
        try {
        	packageSerivce.removePackages(id);
        }catch (Exception e) {
            return new ResponseEntity<Packages>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Packages>(HttpStatus.NO_CONTENT);
    }

}
