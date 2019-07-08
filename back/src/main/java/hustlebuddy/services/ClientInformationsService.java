package hustlebuddy.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hustlebuddy.models.ClientInformations;
import hustlebuddy.repositories.ClientInformationsRepository;

@Service
public class ClientInformationsService {

	@Autowired
	ClientInformationsRepository clientInformationsRepository;
	
	public Iterable<ClientInformations> getClientInformations() {
		return clientInformationsRepository.findAll();
	}
	
	public Optional<ClientInformations> getClientInformationsByUd(Long id) {
		return clientInformationsRepository.findById(id);
	}
	
	public void addClientInformations(ClientInformations clientInformations) {
		clientInformationsRepository.save(clientInformations);
	}
	
	public void removeClientInformations(Long id) {
		Optional<ClientInformations> clientInformations = clientInformationsRepository.findById(id);
		if(clientInformations.isPresent()) {
			clientInformationsRepository.delete(clientInformations.get());
		}
	}
	
	public void updateClientInformations(Long id, ClientInformations clientInformations) {
		Optional<ClientInformations> c = clientInformationsRepository.findById(id);
		if(c.isPresent()) {
			clientInformations.setId(c.get().getId());
			clientInformationsRepository.save(clientInformations);
		}
	}
}
