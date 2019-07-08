package hustlebuddy.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import hustlebuddy.models.ClientInformations;
import hustlebuddy.services.ClientInformationsService;
import hustlebuddy.utils.View.HideOptionalProperties;

@CrossOrigin(origins={"http://localhost:4200"})
@RestController
@RequestMapping("/client-informations")
public class ClientInformationsController {

	@Autowired
	ClientInformationsService clientInformationsService;
	
	@JsonView(HideOptionalProperties.class)
    @RequestMapping(value="/all", method=RequestMethod.GET)
    public ResponseEntity<Iterable<ClientInformations>> getClientInformations() {
        return new ResponseEntity<Iterable<ClientInformations>>(clientInformationsService.getClientInformations(), HttpStatus.OK);
    }

    @JsonView(HideOptionalProperties.class)
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public ResponseEntity<ClientInformations> getClientInformationsById(@PathVariable Long id) {
        Optional<ClientInformations> clientInformations = clientInformationsService.getClientInformationsByUd(id);
        if(clientInformations.isPresent()) {
            return new ResponseEntity<ClientInformations>(clientInformations.get(), HttpStatus.OK);
        }
        return new ResponseEntity<ClientInformations>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value="/add", method=RequestMethod.POST)
    public ResponseEntity<ClientInformations> addClientInformations(@RequestBody ClientInformations clientInformations) {
        clientInformationsService.addClientInformations(clientInformations);
        return new ResponseEntity<ClientInformations>(clientInformations, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public ResponseEntity<ClientInformations> updateClientInformations(@PathVariable Long id, @RequestBody ClientInformations clientInformations) {
        clientInformationsService.updateClientInformations(id, clientInformations);
        return new ResponseEntity<ClientInformations>(clientInformations, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<ClientInformations> removeClientInformations(@PathVariable Long id) {
        try {
            clientInformationsService.removeClientInformations(id);
        }catch (Exception e) {
            return new ResponseEntity<ClientInformations>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<ClientInformations>(HttpStatus.NO_CONTENT);
    }

}
